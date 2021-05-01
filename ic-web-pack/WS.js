// original file lost by incident 202006140000
// copied from @IC-Tech/202010232055
const crypto = require('crypto')
const wsDecode = (a,c={}) => {
	var pos = 0
	var b = {
		fin: !!((0x80 & a[pos]) >> 7),
		rsv: (0x70 & a[pos]) >> 4,
		opcode: 0x0f & a[pos],
		mask: !!((0x80 & a[++pos]) >> 7),
		payloadLen: 0x7f & a[pos],
		data: []
	}
	if(b.payloadLen >= 126) b.payloadLenEx = [a[++pos], a[++pos]]
	if (b.payloadLen > 126) {
		for(var _a = 0; _a < 6; _a++)
			b.payloadLenEx.push(a[++pos])
	}
	if(b.payloadLenEx) {
		b.payloadLen = 0;
		for(var _a = 0; _a < b.payloadLenEx.length; _a++) {
			b.payloadLen |= b.payloadLenEx[_a] << ((b.payloadLenEx.length - _a - 1) * 8);
		}
	}
	if(b.mask) {
		b.mask = [a[++pos], a[++pos], a[++pos], a[++pos]]
	}
	b[b.mask ? 'Edata' : 'data'] = Array.from(a).slice(++pos, b.payloadLen + pos)
	if(b.mask)
		for (var i = 0; i < b.Edata.length; i++) {
    	b.data[i] = b.Edata[i] ^ b.mask[i % 4];
		}
	if(!c.raw && b.opcode == 1)
		b.data = Buffer.from(b.data).toString()
	if(!c.debug) {
		delete b.mask
		delete b.rsv
		delete b.payloadLen
		delete b.payloadLenEx
		delete b.Edata
	}
	return b
}
const rand = (a,b=0) => b + parseInt(Math.random() * (a - b))
const wsEncode = a => {
	if(a instanceof Array || a instanceof Buffer) a = {data: a instanceof Buffer ? Array.from(a) : a, opcode: 2}
	else if(typeof a == 'string') a = ({data: a, opcode: 1})
	if(a.fin == undefined) a.fin = true
	if(a.rsv == undefined) a.rsv = 0
	if(a.mask == undefined) a.mask = [rand(255), rand(255), rand(255), rand(255)]
	if(a.payloadLen == undefined) a.payloadLen = a.data.length
	var b = []
	var pos = 0;
	b[pos++] = (a.fin ? 0x80 : 0) | (a.rsv << 4) | (a.opcode || 0)
	b[pos++] = (a.mask ? 0x80 : 0) | (a.payloadLen < 126 ? a.payloadLen : (a.payloadLen < 0xffff ? 126 : 127))
	if(a.payloadLen > 125)
		// NodeJS limited bit operations to 32 bit
		// I don't know how to fix that
		for(var _a = 0; _a < a.payloadLen < 0xffff ? 2 : 4; _a++) b[pos++] = 0xff & (a >> (_a * 8))
	if(a.mask) {
		for(var _a = 0; _a < 4; _a++)	b[pos++] = a.mask[_a]
	}
	a.data = Buffer.from(a.data)
	if(a.mask) {
				for (var _a = 0; _a < a.data.length; _a++) {
    	b[pos++] = a.data[_a] ^ a.mask[_a % 4];
		}
	}
	else {
				for (var _a = 0; _a < a.data.length; _a++) {
    	b[pos++] = a.data[_a];
		}
	}
	return b
}
class _WS {
	constructor(a) {
		this.id = WS.c++
		this.pings = []
		this.socket = a
		this.write = (a => this.socket.write(a instanceof Buffer ? a : Buffer.from(a))).bind(this)
		this.data = (a => {
			a = wsDecode(a)
			if(a.opcode == 8) {
				this.write(wsEncode({data: '', opcode: 8}))
				this.socket.end()
			}
			else if(a.opcode == 1 || a.opcode == 2 && WS.onMsg) WS.onMsg(a, this)
			else if(a.opcode == 9) this.write(wsEncode({data: a.data, opcode: 10}))
			else if(a.opcode == 10 && a.data.length >= 2) {
				var b = a.data[0] | (a.data[1] << 8);
				for(var _a = 0; _a < this.pings.length; _a++) {
					if(this.pings[_a].id == b && !this.pings[_a].t) {
						this.pings[_a].t = Date.now() - this.pings[_a].st
						if(this.pings[_a].ev) {
							var ev = this.pings[_a].ev
							delete this.pings[_a].ev
							ev(this.pings[_a])
						}
						break
					}
				}
			}
		}).bind(this)
		this.ping = (a => {
			var _a = [rand(255), rand(255)]
			this.pings.push({id: _a[0] | (_a[1] << 8), st: Date.now(), ev: typeof a == 'function' ? a : undefined})
			this.write(wsEncode({data: _a, opcode: 9}))
		}).bind(this)
		this.send = (a => this.write(wsEncode(a))).bind(this)
		this.end = (a => WS.onEnd ? WS.onEnd(this) : 0).bind(this)
		this.pingPong = a => new Promise(a => this.ping(_ => a(_)))
		a.on('data', this.data)
		a.on('end', this.end)
	}
}
var WS = {
	c: 0,
	s: [],
	req: (req, res) => {
		var b = req.headers
		if(!b['upgrade'] || !b['upgrade'] == 'websocket') {
			res.statusCode = 404
			res.end()
			return
		}
		if(!b['sec-websocket-version'] || !b['sec-websocket-key'] || b['sec-websocket-version'] != 13) {
			res.statusCode = 400
			res.end()
			return
		}
		res.statusCode = 101
		res.setHeader('upgrade', 'websocket')
		res.setHeader('connection', 'upgrade')
		res.setHeader('Sec-WebSocket-Accept', crypto.createHash('sha1').update(b['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64'))
		WS.s.push(new _WS(req.socket))
		res.end()
	},
	send: (...a) => WS.s.map(b => b.send(...a)),
	end: (...a) => WS.s.map(b => b.end(...a))
}

exports.WS = WS
