const md = require('@IC-Tech/ic-md')
const md_parse = (a, op) => {
	op = Object.assign({ids:[]}, op || {})
	return a.map(a => {
		if(!a || typeof a == 'string') return a
		if(a.ch && a.ch instanceof Array && a.ch.length > 0 && a.ch.some(a => typeof a == 'string')) a.nodes = 1
		if(a.t == 'link') {
			a.t = 'a'
			a.at = {href: a.url}
			if(a.alt) a.at.title = a.alt
		}
		if(a.t == 'img') {
			a.at = {src: a.url, alt: a.ch}
			if(a.alt) a.at.title = a.alt
			delete a.ch
		}
		if(a.t == 'img' || a.t == 'a') {
			delete a.url
			delete a.alt
		}
		if(a.t.match(/^h[1-6]$/) || ['p', 'blockquote', 'codeblock', 'code', 'a', 'b', 'i', 's'].indexOf(a.t) >= 0 && a.ch) {
			if(typeof a.ch == 'string') {
				a.txt = a.ch
				delete a.ch
				delete a.nodes
			}
			else if((a.ch.length == 1 && typeof a.ch[0] == 'string') || a.ch.length == 0) {
				a.txt = a.ch[0] || ''
				delete a.ch
				delete a.nodes
			}
			if(a.t[0] == 'h') {
				var b
				if(a.ch) {
					b = 0
					while(op.ids.indexOf(b.toString()) >= 0) b++
					b = b.toString()
				}
				else {
					a.id = a.txt.toLowerCase().replace(/[^\w-]/g, ' ').replace(/[ ]{2,}/, ' ').trim().replaceAll(' ', '-')
					if(op.ids.indexOf(a.id) >= 0) {
						b = 1
						while(op.ids.indexOf(a.id + '-' + b) >= 0) b++
						b = a.id + '-' + b
					}
					else b = a.id
					delete a.id
				}
				a.at = {id: b}
			}
			if(a.t == 'codeblock') {
				a.t = 'code'
				if(a.lang) a.at = {clang: a.lang}
				a = {t: 'pre', ch: [a]}
			}
			delete a.lang
		}
		if(a.t == 'ul' || a.t == 'ol' || a.t == 'cl') {
			a.ch = a.ch.map(a => {
				a.a = md_parse(a.a)
				a.b = md_parse(a.b)
				return a
			})
			var t = {cl: a.t == 'cl'}
			a.at = {}
			if(t.ex = a.ch.some(a => a.b.length > 0)) a.at['data-exlist'] = '1'
			if(t.cl) a.at['data-type'] = 'task list'
			a.ch = a.ch.map(a => {
				if(t.cl) a.a = [
					{t: 'label', nodes: 1, ch: [{t: 'input', at: Object.assign({type: 'checkbox', disabled: '', value: ''}, a.v ? {checked: ''} : {})}, ...a.a]}
				]
				if(t.ex) {
					a.a.push({t:'br'})
					a.a.push({t: 'p', [(a.c = a.b.length == 0 || (a.b.length == 1 && typeof a.b[0] == 'string')) ? 'txt' : 'ch']: a.c ? (a.b[0] || '') : a.b, nodes: a.c ? 0 : 1})
				}
				if(a.a.length == 0) a.a = ['']
				if(a.a.length == 1 && typeof a.a[0] == 'string') return {t: 'li', txt: a.a[0]}
				return {t: 'li', ch: a.a, nodes: 1}
			})
			if(!Object.keys(a.at).length) delete a.at
			if(t.cl) a.t = 'ul'
			return a
		}
		if(a.t == 'table') {
			a.ch = a.ch.map((a,i) => ({t: 'tr', ch: a.map((a,b) => Object.assign({t: i ? 'td' : 'th', [(b = a.length == 0 || (a.length == 1 && typeof a[0] == 'string')) ? 'txt' : 'ch']: b ? (a[0] || '') : md_parse(a)}, b ? {} : {nodes: 1}))}))
			a.ch = [
				{t: 'thead', ch: [a.ch[0]]},
				{t: 'tbody', ch: a.ch.slice(1)}
			]
			return a
		}
		if(a.ch && a.ch instanceof Array) a.ch = md_parse(a.ch)
		return a
	})
}
const parse = a => md_parse(md.parse(a))
parse.md_parse = md_parse
module.exports = parse
