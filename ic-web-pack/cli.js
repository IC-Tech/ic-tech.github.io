module.exports = (app, commands, op) => {
	op = op || {}
	commands.help = {
		comms: ['h', 'help'],
		desc: 'print this help'
	}
	commands = Object.keys(commands).map(a => {
		commands[a].comms = commands[a].comms.map((a,b) => (!b && '-' || '--') + a.toLowerCase().replace(/ /g, '-'))
		return ({...commands[a], name: a})
	}).sort((a,b) => a.comms[0].localeCompare(b.comms[0]))
	var r = process.argv.slice(2).map(_ => {
		var a = _.indexOf('='),
		v = _.substr((a = a < 0 ? _.length : a) + 1)
		a = _.substr(0, a)
		n = a.toLowerCase()
		if(!commands.some(b => b.comms.some(d => n == d ? [n = b.name] : 0))) return _
		return ({n, v})
	}), r1 = {}, r2 = [], r3 = 0
	r.forEach(a => {
		if(typeof a == 'string') return r2.push(a)
		if(!r1[a.n]) r1[a.n] = []
		if(a.v) r1[a.n].push(a.v)
	})
	Object.keys(r1).forEach(a => {
		var c
		commands.some(b => {if(b.name == a) c = b})
		if(!r1[a].length) {
			if(c.exp) {
				console.error(`submit "${c.exp}" for "${c.comms[0]}" command`)
				return r3 = 1
			}
			return r1[a] = null
		}
		if(r1[a].length > 1 && !c.multi) {
			console.error(`using multiple "${c.comms[0]}" commands are not allowed`)
			return r3 = 1
		}
		if(r1[a].length == 1) r1[a] = r1[a][0]
	})
	if(r3) return 1
	if(typeof r1.help != 'undefined' || r.length == 0) {
		console.log(`Usage: ${app} [options...]${op.usage ? (' ' + op.usage) : ''}\n` + commands.map(a => {
			var b = ' ' + a.comms.join(', ')
			if(a.exp) b += '=' + a.exp
			if(a.desc) b += '\n     ' + a.desc
			return b
		}).join('\n'))
		return 1
	}
	if(op.noignore && r2.length) {
		r2.forEach(a => console.error(`invalid command input "${a}"`))
		return 1
	}
	return op.all ? ({row: r, commands: r1, ignore: r2}) : r1
}
