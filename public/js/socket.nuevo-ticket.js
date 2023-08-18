

// comando para establecer comunicacion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect',()=>{
    console.log('Conectado al servidor');
});

socket.on('estadoActual',(data)=>{
    label.text(data.actual);
});


// escuchar mensaje del servidor




socket.on('disconnect',()=>{
    console.log('Se perdio la conexion con el servidor');
});

$('button').on('click',()=>{

    socket.emit('siguienteTicket', null ,(siguienteTicket)=>{

        label.text(siguienteTicket);
    });

});