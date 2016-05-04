/**
 * Created by tonyhui on 16/5/4.
 */

var redis = require('redis');
var client = redis.createClient();  // 默认使用port:6379, host:127.0.0.1

client.on('connect', function() {
    console.log('connected');
});


client.set('framework', 'AngularJS', function(err, reply) {
    console.log(reply)
});