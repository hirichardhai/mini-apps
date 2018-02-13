const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', function(req, res){
    res.sendFile('index.html', { root: '../client'});
});

// app.get('/', function(req, res){
//     res.sendFile('app.js', {root: '../client'})
// });


app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log('app listening on port 3000!'));