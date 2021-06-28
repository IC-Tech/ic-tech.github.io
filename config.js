const
fs = require('fs')
path = require('path'),
html = require('./build-helpers/min-html'),
js_build = require('./build-helpers/js-build'),
paths_= (a,b) => a.startsWith(b) ? a.substr(b.length + (b.endsWith('/') && 0 || 1)) : a,
paths = a => path.resolve(__dirname, a).replace(/[^]\/$/, a => a.substr(0, 2)),
pkg = require('./package.json'),


// -- badic config start --

banner_year = (new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear(),
banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage || 'https://github.com/IC-Tech'}
 * Copyright © ${banner_year} ${pkg.author = /*pkg.author || */'Imesh Chamara'}
 * Released under the ${pkg.license || 'MIT'} License
 */`,
html_banner = `Copyright © ${banner_year} ${pkg.author}`
JS_DIR = 'scripts', CSS_DIR = 'styles'

var pages = [
	{ page: 'index', md: 'src/index.md' },
	{ page: 'projects/kotori', md: 'src/kotori.md' },
	{ page: 'projects/megumi', md: 'src/megumi.md' },
	{ page: 'projects/ami', md: 'src/ami.md' },
	{ page: 'projects/ic-app', md: 'src/ic-app.md' },
	{ page: 'projects/ilog', md: 'src/ilog.md' },
	{ page: 'projects/ssas', md: 'src/ssas.md' },
	{ page: 'projects/dashboard', md: 'src/dashboard.md' },
	{ page: 'projects/text-filter', md: 'src/text-filter.md' },
	{ page: 'projects/host-file', md: 'src/host-file.md' },
	{
		page: '404',
		html: 'src/index.html',
		js: 'src/404.js',
		css: 'src/404.css'
	}
]

// -- badic config end --

.map(a => {
	['html', 'js', 'css', 'md'].forEach(b => a[b] && (a[b] = paths(a[b])))
	return a
})
const prf = {
	js: a => `<script charset="utf-8" defer="defer" src="/${JS_DIR}/${a}"></script>`,
	css: a => `<link rel="stylesheet" type="text/css" href="/${CSS_DIR}/${a}"/>`
}
module.exports = {
	source: 'src/',
	output: 'public',
	port: 5000,
	clean: true,
	build: async (source, output, r) => {
		r.copyDir(source + '/public', output)

		var md_cache = '', md_dir = output + '/md_tmp'
		r.mkdir(md_dir)
		for (var i = 0; i < pages.length; i++) {
			if(!pages[i].md) continue
			if(!md_cache) md_cache = fs.readFileSync(source + '/md-page-gen.js').toString()
			var b = paths_(pages[i].md, source)
			b = [b, path.parse(md_dir + '/' + b)]
			b[1] = b[1].dir + '/' + b[1].name
			pages[i].css = b[1] + '.css'
			pages[i].html = source + '/index.html'
			fs.writeFileSync(pages[i].js = b[1] + '.js', md_cache.replaceAll('$DIR', source).replaceAll('$PAGE', b[0]))
		}
		await js_build({
			input: pages.map(a => a.js).filter(a => a),
			css_dir: output + '/' + CSS_DIR,
			js_dir: output + '/' + JS_DIR,
			mode: r.config.mode,
			banner: banner
		})
		pages = pages.map(a => a.md && ['js', 'css'].forEach(b => a[b] = source + '/' + paths_(a[b], md_dir)) && 0 || a)
		for (var i = 0; i < pages.length; i++) if(pages[i].html) {
			var a = fs.readFileSync(pages[i].html).toString()
			.replace(/<\/([ \t]*)?body>/i, a => {
				var d = ''
				if(pages[i].js) d += prf.js(paths_(pages[i].js, source))
				return d + a
			})
			.replace(/<\/([ \t]*)?head>/i, a => {
				var d = ''
				if(pages[i].css) d += prf.css(paths_(pages[i].css, source))
				return d + a
			})
			r.mkdir(output + '/projects')
			fs.writeFileSync(output + '/' + pages[i].page + '.html', r.config.mode == 'dev' ? a : html.f(a, html_banner))
		}
		fs.rmSync(md_dir, {recursive: !0})
	}
}
