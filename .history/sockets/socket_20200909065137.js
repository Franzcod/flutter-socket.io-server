

const { io } = require('../index');
const Bands = require('../models/bands');
const Band = require('../models/band');


const bands = new Bands();


bands.addBand( new Band( 'Breaking Benjamin' ) );
bands.addBand( new Band( 'Bon Jovi' ) );
bands.addBand( new Band( 'Héroes del Silencio' ) );
bands.addBand( new Band( 'Metallica' ) );

console.log(Bands);

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
