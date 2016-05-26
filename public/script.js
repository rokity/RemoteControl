$(".up").mouseup(function(){
  $(".up").removeClass('pressed');
});
$(".left").mouseup(function(){
  $(".left").removeClass('pressed');
});
$(".down").mouseup(function(){
  $(".down").removeClass('pressed');
});
$(".right").mouseup(function(){
  $(".right").removeClass('pressed');
});

$(".up").mousedown(function(){
  $(".up").addClass('pressed');
  var socket=io();
  socket.emit('k', "up");
});

$(".left").mousedown(function(){
  $(".left").addClass('pressed');
  var socket=io();
  socket.emit('k', "left");

});
$(".down").mousedown(function(){
  $(".down").addClass('pressed');
  var socket=io();
  socket.emit('k', "down");
});
$(".right").mousedown(function(){
  $(".right").addClass('pressed');
  var socket=io();
  socket.emit('k', "right");
});
