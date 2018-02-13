// var convertJSON = (data) => {
//     var string = '';
//     var keys = [];
//     for (var key in data) {
//         if (key !== 'children') {
//             string += `${key},`
//             keys.push(key);
//         }
//     }

//     var extractValues = (obj) => {
//         if (!Array.isArray(obj)) {
//             for (var i = 0; i < keys.length; i++) {
//                 string += `${obj[keys[i]]},`
//             }
//         }
//         if (Array.isArray(obj)) {

//         }
//         for (var i = 0; i < data.children.length; i++) {
            
//         }
//     }

//     extractValues(data);
//     return string;
// }

const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('../client'));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // res.send(convertJSON(req.body));
});

app.listen(3000);

