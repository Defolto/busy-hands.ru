const app = require('express')();
const path = require('path');
const express = require('express');
const http = require('http').Server(app);
var io = require('socket.io')(http);
var multer  = require('multer');
const port = process.env.PORT || 3000;
const User = require('./models/User')

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://test:952863mak@cluster0.ainc3.mongodb.net/test?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, {useUnifiedTopology: true});

app.use(express.static(path.resolve(__dirname, '../')));

app.use(express.json());

app.post('/test', function(request, response){
    console.log(request.body.text);
    response.json({answer: request.body.text + "12"});
});

app.post('/login', function(request, response){
    mongoClient.connect(function(err, client){

        const db = client.db("busy-hand");
        const collection = db.collection("users");
        console.log(request.body.date.email);
         
        collection.find({"email": request.body.date.email, "password": request.body.date.password}).toArray(function(err, results){
            if (results.length) {
                let user = new User(results[0])
                client.close();
                response.json(user);
            } else {
                response.json(false);
            }
        });
    });
});

app.post('/getUsersChat', function(request, response){
    mongoClient.connect(function(err, client){

        const db = client.db("busy-hand");
        const collection = db.collection("users");
        let users = [];

        request.body.date.chats.forEach(element => {
            users.push(element.id)
        });

        console.log(users);

        // FIXME: разобраться почему возвращается undefind
        collection.find({"email": 'defoltspam@gmail.com'}).toArray(function(err, results){
            console.log(results);
            client.close();
        });

        response.json(users);
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
   
