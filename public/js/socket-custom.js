var socket = io();
		socket.on('connect', () => {
			console.log('Conectado al servidor');
		})

		socket.on('disconnect', () =>{
			console.log('perdimos conexión con el servidor');
		})
			//emit es para enviar
	socket.emit('enviarMensaje', {
		usuario: 'Uriel',
		mensaje: 'Hola mundo'
	}, //callback que obtendra la respuesta del servidor
	(respuesta) => {
		console.log('respuesta servidor:', respuesta);
	});
			//escuchar el evento o mensaje
	socket.on('enviarMensaje', (mensaje) => {
		console.log('Servidor: ',mensaje);
	})