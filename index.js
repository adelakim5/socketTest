const express = require('express')
var app = express();
var http = require('http').createServer(app);
let io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
/*
app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname + '/style.css')
})
*/
app.use(express.static('static'))

io.on('connection', (socket) => {
    // console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ', msg)
        io.emit('chat message', msg)
    })
  });

http.listen(3000, () => {
    console.log('listening on *:3000');
});