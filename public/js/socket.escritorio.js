
var socket = io();

var searchParams = new URLSearchParams( window.location.search );

if (!searchParams.has('escritorio')) {
    window.location = "index.html";
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text("Escritorio " + escritorio);

$('button').on('click', ()=>{

    socket.emit('atenderTicket', { escritorio }, (resp)=>{
        console.log(resp)

        if (resp === "No hay Tickets") {
            label.text("No hay Tickets");
            alert("No hay mas Tickets");
            return;
        }
        label.text("Ticket " + resp.numero);
    })
})