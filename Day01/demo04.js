var fs = require("fs");

fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log("file opened successfully");
});

fs.stat('input.txt', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log(fd);
})

console.log("program ended")
