

const { io } = require('../index');
const Bands = require('../models/bands');


const bands = new Bands();
console.log('init');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    });

    client.on('emitir-mensaje', (payload) => {
        // io.emit('nuevo-mensaje',payload);   //EMITE A TODOS!
        client.broadcast.emit('nuevo-mensaje',payload); ///A TODOS MENOS AL QUE EMITIO
    })


});