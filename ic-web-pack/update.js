;(async a => {
	console.log('[updater]', 'loaded')
	var socket = await new Promise((a,b) => {
		var socket = new WebSocket('ws://' + location.host + '/update');
		socket.onopen = _ => a(socket);
		socket.onerror = _ => b(socket)
	}),
	send = a => socket.send(JSON.stringify(a)),
	update = 0;
	socket.onclose = _ => console.warn('[updater]', 'disconnected')//update ? location.reload() : 0;
	socket.onerror = e => console.error('[updater]', e);
	socket.onmessage = a => {
		try {
			a = JSON.parse(a.data);
			if(update && a.update != update) {
				console.log('[updater]', 'reload');
				location.reload()
			}
			if(a.update) {
				update = a.update
			}
			else console.log('[updater]', a)
		}
		catch(e) {
			console.error('[updater]', e)
		}
	};
	send({req: 'update'})
})()
