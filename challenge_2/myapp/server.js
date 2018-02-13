const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res){
    res.sendFile('index.html', { root: '../client'})});

app.listen(3000, () => console.log('app listening on port 3000!'));