/**
    使用emitter手动触发的事件是按顺序执行的
    connection->data_received->main
*/

var events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("connection successful");
    //while(true){}
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('data received successful');
});

eventEmitter.emit('connection');

console.log("program ended");
