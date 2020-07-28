var socket = io();

// Ecuchar informacion
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

// Enviar para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Oscar',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log(resp)
})

// Escuchar informacion
socket.on('enviarMensaje', function(data){
    console.log('Servidor:', data)
});