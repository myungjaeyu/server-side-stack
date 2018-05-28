const _io = require('socket.io');

module.exports = http => {
    const io = _io(http);

    io.on('connection', socket => {
        console.log('user connected: ', socket.id);
        socket.on('disconnect', () => console.log('user disconnected: ', socket.id));
    });

};