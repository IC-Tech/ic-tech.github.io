const xml = require('ic-xml')
exports.f = (a,c) => {
	a = xml.readXML(a.substr(a.indexOf('<html')))
	var d = []
	var e = a => {
		if(['script', 'style'].some(b => b == a.name)) {
			var f = new Date()
			f = Buffer.from(f.toString() + f.getTime()).toString('base64').replace(/[^\w]/g, '')
			d.push({f, v: a.value})
			a.value = f
		}
		else if(a.elements) a.elements = a.elements.map(a => e(a))
		return a
	}
	a = e(a)
	var b = xml.writeXML(a, {noselfauto: true, declaration: '<!DOCTYPE html>' + (c ? `<!-- ${c} -->` : '')})
	d.forEach(d => b = b.replace(d.f, d.v))
	return b
}
