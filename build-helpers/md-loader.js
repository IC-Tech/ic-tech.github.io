const parse = require('./md-parse')
const fs = require('fs')
const filter = a => a.endsWith('.md')
const md_loader = op => {
	op = op || {}
	return {
		name: 'md-loader',
		resolveId(id, importer) {
			if(filter(id)) return fs.statSync(id = path.resolve(path.parse(importer).dir, id), {throwIfNoEntry: false}) ? id : null
			return null
		},
		load(id) {
			if (filter(id) && fs.statSync(id, {throwIfNoEntry: false})) return 'var a=' + JSON.stringify(parse(fs.readFileSync(id).toString())).replace(/"([\w]*)"\s?:/g, (a,b) => b + ':') + ';export default a'
			return null
		}
	}
}
module.exports = md_loader
