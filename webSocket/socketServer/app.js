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

io.on('connection', function (socket) {
  console.log('有客户端进来了：' + socket.id);
  socket.on('textmsg', function (data) {
    console.log('客户端：' + data);
    if (/你瞅啥/.test(data)) {
      socket.emit('textmsg', '瞅你咋滴');
    } else if (/瞅个试试/.test(data)) {
      socket.emit('textmsg', '试试就试试');
      io.emit('textmsg', '兄弟们，抄家伙');
    }
  });
});
