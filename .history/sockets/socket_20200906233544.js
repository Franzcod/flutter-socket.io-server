const {io} = require('../index');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload);

        var now = new DateTime.now();

        io.emit( 'mensaje', {admin: 'Nuevo mensaje', hora: "perrro"} );
    });

});
