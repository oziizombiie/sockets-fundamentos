
const { io } = require('../server')

//io.on 'connection' crea la conexion, el parametro client obtiene la informacion del 
//equipo con el cual se esta conectando
//on es para escuchar 
io.on('connection', (client) =>{
	console.log('Usuario conectado');
	
	client.emit('enviarMensaje', {usuario: 'Admin', mensaje:'Bienvenido a esta App.'})
	//Manda un mensaje cuando el usuario (client) se desconecta
	client.on('disconnect', () =>{
		console.log('Usuario desconectado');
	})
	//escuchar el cliente
	//obtenemos el mensaje que  este dentro del parametro enviarMensaje
	client.on('enviarMensaje', (data,confirmacion) => {
		
		console.log(data);

		client.broadcast.emit('enviarMensaje', data)
		//vemos dentro del mensaje si contiene un usuario para disparar el callback
		/*
		if( mensaje.usuario)
			{
				confirmacion({
					respuesta: 'Todo salio bien'
				}); 
			}
		//si no hay usuario respondemos con un error|
		else{
			confirmacion({
				respuesta:'Todo salio mal'
			})
		}
		*/
	})
})