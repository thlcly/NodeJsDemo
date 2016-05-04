var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// 连接数据库
con.connect(function (err) {
    if (err) {
        console.log('Error connecting to DB');
        return;
    }
    console.log('Connection established');
});

//console.log('continues');

// 查询语句
con.query('select * from employees', function (err, rows) {
    if (err) throw err;
    console.log('Data received from DB:\n');
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].id);
        console.log(rows[i].name);
        console.log(rows[i].location);
    }

});

var employee = {name: 'Winnie', location: 'Australia'};
con.query('insert into employees set ?', employee, function (err, res) {
    if (err) throw err;
    console.log(res);
    console.log('last insert id:', res.insertId);
});

// 更新语句
con.query('UPDATE employees SET location = ? where id = ?', ["South Africa", 5], function (err, res) {
    if(err) throw err;
    console.log(res);
});

// 删除语句
con.query('DELETE FROM employees WHERE id = ?', [5], function(err, res) {
    if(err) throw err;
    console.log(res);
});


// 关闭连接
/*
con.end(function (err) {
    //The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    //before sending a COM_QUIT packet to the MySQL server.
    console.log('connection disconnected');
});
*/