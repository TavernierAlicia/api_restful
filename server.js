const express = require('express');
const app = express();
const fs = require("fs");

/*
*
*method > listUsers
*
*/

app.get('/listUsers', function (req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data){
        console.log(data);
        res.send(data);

    });
})

let server = app.listen(8081, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("launch API restful with the following URL http://%s:%s", host, port)
})