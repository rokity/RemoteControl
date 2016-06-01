var express = require('express');
var app=express();
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var robot = require("robotjs");

io.on('connection', function(socket){
  socket.on('k', function(msg){
    robot.keyTap(msg);
  });

});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/url',function(req,res){
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    add=add+":3000";
    var qr = require('qr-image');
    var qr_svg = qr.image(add, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('public/images/url.png'));
    res.sendFile(__dirname + "/done.html");
        });
});
var open = require('open');

http.listen(3000, function(){
console.log("localhost:3000/url");
open("http://localhost:3000/url");
});
/*

*/
