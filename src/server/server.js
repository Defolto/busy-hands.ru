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
 
mongoClient.connect(function(err, client){
      
    const db = client.db("busy-hand");
    const collection = db.collection("users");
     
    collection.find({email: "defoltspam@gmail.com", password: "952863mak"}).toArray(function(err, results){
        // console.log(results[0].company);
        let user = new User(results[0].name, results[0].img, results[0].company)
        console.log(user);
        client.close();
    });
});

app.use(express.static(path.resolve(__dirname, '../')));

app.use(express.json());

app.post('/test', function(request, response){
    console.log(request.body.text);
});

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
   
