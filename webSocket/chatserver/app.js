var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
  //解决 跨域 问题
  cors: {
    origin: '*',
  },
});

server.listen(3000, function () {
  console.log('服务已经启动...');
});

// 调用io.on() 方法， 监听connection事件，(有客户端请求建立连接时触发)
// 一旦监听该事件，将立即执行回调方法
// socketio调用回调方法时，自动传入一个socket对象，
// 该socket对象用于与客户端进行数据通信

let count = 0;

io.on('connection', function (socket) {
  console.log('客户端连接：' + socket.id);
  count++;
  io.emit('countmsg', count);

  socket.on('disconnect', function () {
    console.log('客户端断开：' + socket.id);
    count--;
    io.emit('countmsg', count);
  });

  socket.on('textmsg', function (data) {
    io.emit('textmsg', data);
  });
});
