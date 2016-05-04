/**
 * Created by tonyhui on 16/5/4.
 */

var express = require("express");
var mysql = require("mysql");
// mysql数据库配置, 创建一个数据库连接池
var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs",
    debug: false
});
var app = express();

// 连接mysql数据库
function handleDatabase(req, res) {
    pool.getConnection(function (err, con) {
        if (err) {
            con.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + con.threadId);

        con.query('select * from employees', function (err, rows) {
            con.release();
            if (!err) {
                res.json(rows);
            }
        });

        con.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
    })
}
app.get("/", function (req, res) {
    handleDatabase(req, res);
});

app.listen(3000);