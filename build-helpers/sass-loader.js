const fs = require('fs')
const sass = require('sass')
const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const advancedPreset = require('cssnano-preset-advanced')

const filter = a => a.match(/\.(|css|scss|sass)$/)
const build = async (id, op) => {
	var b = await new Promise(a => postcss([ 
		autoprefixer(),
		op.mode != 'dev' && !op.no_opt && cssnano(advancedPreset({
			autoprefixer: false,
			discardComments: {
				removeAll: true
			}
		}))
	].filter(a => a)).process(
		(b = sass.renderSync(Object.assign(id, {sourceMap: !id.data && op.mode == 'dev', outputStyle: op.mode == 'dev' ? 'expanded' : 'compressed'})).css || '').toString()
	,{ from: undefined }).then(result => {
		result.warnings().forEach(warn => console.warn(warn.toString()))
		a(result)
	}))
	return b.css
}
const sass_loader = a => {
	const files = {}
	const importers = {}
	var options = {}
	return ({
		name: 'sass-loader',
		resolveId(id, importer) {
			if (filter(id) && importer) {
				if(!importers[importer]) importers[importer] = []
				importers[importer].push(path.resolve(path.parse(importer).dir || '', id))
			}
			return null
		},
		async load(id) {
			if (!filter(id)) return null
			files[id] = await build({file: id}, {mode: a.mode})
			return ''
		},
		async generateBundle (opts) {
			var b = Object.keys(importers),
			c = b.map(a => path.parse(a).name),
			dir = a.dir || opts.dir || ''
			if(dir) {
				try {
					fs.mkdirSync(dir)
				}
				catch (e) {
					if(e.code != 'EEXIST') throw e
				}
			}
			for (var i = b.length - 1; i >= 0; i--) fs.writeFileSync(path.resolve(dir, c[i] + '.css'), (a.banner && (a.banner + '\n') || '') + (await build({data: importers[b[i]].map(a => files[a] && files[a] || 0).filter(a => a).join('\n')}, {mode: a.mode, no_opt: 1})))
		}
	})
}
module.exports = sass_loader
