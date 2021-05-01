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
	{
		page: 'index',
		html: 'src/index.html',
		js: 'src/index.js',
		css: 'src/index.css'
	},
	{
		page: 'projects/kotori',
		html: 'src/index.html',
		js: 'src/kotori.js',
		css: 'src/kotori.css'
	}
]

// -- badic config end --

.map(a => {
	['html', 'js', 'css'].forEach(b => a[b] && (a[b] = paths(a[b])))
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

		await js_build({
			input: pages.map(a => a.js).filter(a => a),
			css_dir: output + '/' + CSS_DIR,
			js_dir: output + '/' + JS_DIR,
			mode: r.config.mode,
			banner: banner
		})
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
	}
}
