var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('um troxa conectado');
  socket.on('disconnect', function(){
    console.log('um troxa saiu');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('mensagem: ' + msg);
  });
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('saindo na *:3000');
});