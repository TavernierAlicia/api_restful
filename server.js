const express = require('express');
const app = express();
const fs = require("fs");

let user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
}

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

/*
*
*method > addUsers
*
*/
app.post('/addUsers', function (req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        data = JSON.parse(data);
        data ["user4"] = user["user4"];
        console.log(data);
        res.send(JSON.stringify(data));
    });
})


/*
*
*method > getUserByID
method Get : Récupérer la ressource d'un utilisateur par l'identifiant
*
*/

app.get('/:id', function (req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        if(err) throw err;
            let users = JSON.parse(data);
            let user = users["user" + req.params.id]
            console.log("User Info by ID:" + JSON.stringify(user));
            res.send(JSON.stringify(user));
    });
})


/*
*
*method > deleteUser
*
*/

app.delete('/deleteUser', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        data = JSON.parse(data);
        delete data["user" + 2];
        console.log("Delete user" + data);
        res.send(JSON.stringify(data));
    });
})



let server = app.listen(8082, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("launch API restful with the following URL http://%s:%s", host, port)
})