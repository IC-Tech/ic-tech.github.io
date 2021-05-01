// original file from @IC-Tech/202010232055
const os = require('os')
const fs = require('fs')
const url = require('url')
const http = require('http')
const path = require('path')
const contentTypes = require('./data.json').contentTypes
const { WS } = require('./WS')
const path_resolve = a => path.resolve(process.env.PWD, a)
var config = require('./cli')('ic-web-pack', {
	serve: {
		comms: ['s', 'serve', 'server'],
		desc: 'serve files with auto build on modifications'
	},
	mode: {
		comms: ['m', 'mode'],
		exp:  '<type>',
		desc: 'build mode type use "prod" for production build or use "dev" for development build'
	},
	output: {
		comms: ['o', 'output'],
		exp:  '<directory>',
		desc: 'location for write build output files'
	},
	input: {
		comms: ['i', 'input', 'source'],
		exp:  '<directory>',
		desc: 'location of where source files located at'
	},
	links: {
		comms: ['l', 'links'],
		desc: 'allow symbolic links'
	}
}, {usage: `<config file>`, all: 1})
if(config == 1) return
if(config.ignore.length < 1) {
	console.error('config file not defined\nuse "--help" for print help')
	return 
}
var config = Object.assign(require(path_resolve(config.ignore[config.ignore.length - 1])), config.commands)
config.mode = config.mode == 'prod' ? 'prod' : 'dev'
const nosl = a => a.endsWith('/') ? a.substr(0, a.length - 1) : a
config.build_ = fs.mkdtempSync(path.join(os.tmpdir(), 'ic-web-pack-dev-'))
config.source = path_resolve(config.source || './src')
config.output = path_resolve(config.output || './build')
config.source = nosl(config.source)
config.output = nosl(config.output)
config.host = config.host || 'localhost'
config.serve = config.serve || config.serve === null
config.links = config.links || config.links === null
try {
	if(!fs.statSync(config.source).isDirectory()) {
		console.error(`defined source ("${config.source}") is not a directory`)
		return
	}
}
catch (e) {
	if(e.code == 'ENOENT') console.error(`defined source ("${config.source}") not exist`)
	console.error(`defined source ("${config.source}") not accessible`)
	return
}

const readlink = a => path.resolve(path.parse(a).dir, fs.readlinkSync(a))
const mkdir = a => {
	try {
		fs.mkdirSync(a)
	}
	catch (e) { if(e.code != 'EEXIST') throw e }
}
const copyDir = (a, b) => {
	mkdir(b)
	a = nosl(a)
	b = nosl(b)
	fs.readdirSync(a, {withFileTypes: !0}).forEach(c => {
		var d = [a + '/' + c.name, b + '/' + c.name]
		if(c.isSymbolicLink()) {
			c = fs.statSync(d[0] = readlink(d[0]))
			if(config.links) return fs.symlinkSync(...d)
		}
		if(c.isDirectory()) return copyDir(...d)
		fs.copyFileSync(...d)
	})
}
const rm = a => fs.readdirSync(a).forEach(b => fs.rmSync(a + '/' + b, {recursive: !0}))

var mtime = 0, check = a => {
	try {
		a = fs.statSync(a)
	}
	catch (e) {
		if(e.code == 'ENOENT') return -1
		else console.error(e)
		return Date.now()
	}
	return mtime = a.mtimeMs
}
var update = Date.now(), up = _ => WS.send(JSON.stringify({update: _})), filter = '', build_wait, rebuild
const build = async a => {
	if(a != 1 && build_wait) return rebuild = 1
	if(a == 1) rebuild = 0
	console.log(new Date(), `${a == 1 ? 're' : ''}build started`)
	build_wait = 1
	mkdir(config.build_)
	rm(config.build_)
	try {
		if(typeof config.build == 'function') await config.build(config.source, config.build_,{config, copyDir, rm, update})
		else copyDir(config.source, config.build_)
	}
	catch (e) {
		console.log(new Date(), 'build failed')
		console.log(e)
		if(rebuild) return build(1)
		return build_wait = 0
	}
	if(rebuild) return build(1)
	mkdir(config.output)
	if(config.clean) rm(config.output)
	copyDir(config.build_, config.output)
	rm(config.build_)
	build_wait = 0
	console.log(new Date(), config.serve ? 'updating' : 'build OK')
	up(update = Date.now())
}
const watcher_e = (eventType, filename) => {
	filename = filename.startsWith(config.source) && filename.substr(config.source.length + 1) || filename
	var b = mtime, a = check(config.source + '/' + filename)
	if(filter == filename && b == a) return //console.log(new Date(), '[ignore]', a)
	if(typeof config.ignore == 'function' && !config.ignore(eventType, filename)) return
  console.log(new Date(), `[${a == -1 && 'remove' || eventType}] ${filter = filename || 'unknown'}`)
	build()
}
var watcher = []
if(!os.platform().match(/^(darwin|win32)$/i)) {
	var watch = a => {
		watcher.push(fs.watch(a, (b,c) => watcher_e(b, a + '/' + c)))
		fs.readdirSync(a, {withFileTypes: !0}).filter(a => a.isDirectory()).forEach(b => watch(a + '/' + b.name))
	}
	watch(config.source)
}
else watcher.push(fs.watch(config.source, {recursive: !0}, watcher_e))

WS.onMsg = (a, b) => {
	var send = a => b.send(JSON.stringify(a))
	try {
		var a = JSON.parse(a.data)
	}
	catch (e) {
		return send({error: 'invalid data'})
	}
	if(a.req == 'update') return send({update})
	send({error: 'invalid request'})
}

httpErr = a => {
	var n = ({
		'400': {t: 'Bad Request', d: ''},
		'401': {t: 'Unauthorized', d: 'request is unauthorized or unauthenticated'},
		'404': {t: 'Not Found', d: 'requested URL have removed or moved new location'},
		'500': {t: 'Internal Server Error', d: 'server encountered an internal server error and was unable to complete your request'},
	})[a]
	n.t = a + ' ' + n.t
	return `<!DOCTYPE html><html><head><title>${n.t}</title><meta name="viewport" content="width=device-width, initial-scale=1"/></head><body bgcolor="white"><center><h1>${n.t}</h1></center><center>${n.d}</center><hr><center>IC-Tech</center></body></html>`
}
const server = http.createServer(async (req, res) => {
	;[
		['Server', 'IC-Tech'],
		['WebServer', 'IC-Tech Server; Copyright (c) 2021, Imesh Chamara'],
		['X-Content-Type-Options', 'nosniff'],
		['X-Frame-Options', 'SAMEORIGIN'],
		['X-XSS-Protection', '1; mode=block'],
		['Cross-Origin-Resource-Policy', 'same-origin'],
		['Referrer-Policy', 'same-origin']
	].forEach(a => res.setHeader(...a))
	var a = url.parse(req.url)
	a.pathname = url.fileURLToPath('file://' + a.pathname)
	if(a.pathname == '/update') return WS.req(req, res)
	var b = config.output + (a.pathname == '/' ? '/index.html' : a.pathname).replace(/\\/g, '/').replace(/\.\.\//g, '').replace(/\/\//g, '')
	if(b.endsWith('ic-web-pack-updater.js')) b = __dirname + '/update.js'
	var d = path.parse(b)
	d = contentTypes[(d.ext || '').substr(1) || 'default'] || contentTypes['default']
	res.setHeader('Content-Type', d)
	try {
		if(!(d = fs.statSync(b)) || !d.isFile()) throw 'file error'
	}
	catch {
		res.setHeader('Content-Type', 'text/html')
		return res.end(httpErr(res.statusCode = 404))
	}
	try {
		if(b.endsWith('.html')) return res.end(fs.readFileSync(b).toString().replace(/<\/([ \t]*)?head>/i, a => `<script type="text/javascript" src="/ic-web-pack-updater.js"></script>` + a))
		else return fs.createReadStream(b).pipe(res)
	}
	catch (e) {
		//if(e.code == 'ENOENT') {
		//	res.setHeader('Content-Type', 'text/html')
		//	return res.end(httpErr(res.statusCode = 404))
		//}
		//else 
		console.error(e)
	}
	try {
		res.setHeader('Content-Type', 'text/html')
		res.end(httpErr(res.statusCode = 500))
	}
	catch(e){console.error(e)}
})
;(async _ => {
	await build()
	if(config.serve) server.listen(config.port || process.env.PORT || 3000, config.host, _ => console.log('server ready on http://' + config.host + ':' + server.address().port))
	else process.exit()
})()
