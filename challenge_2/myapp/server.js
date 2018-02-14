// var convertJSON = (data) => {
//     var string = '';
//     var keys = [];
//     for (var key in data) {
//         if (key !== 'children') {
//             string += `${key},`
//             keys.push(key);
//         }
//     }
//     string = string.substring(0, string.length -1);
//     string += '\n'

//     var extractValues = (obj) => {
//         if (!Array.isArray(obj)) {
//             for (var i = 0; i < keys.length; i++) {
//                 string += `${obj[keys[i]]},`
//             }
//             string = string.substring(0, string.length -1);
//             string += '\n'
//         }
//         if (Array.isArray(obj)) {
//             for (var i = 0; i < keys.length; i++) {
//                 string += `${obj[keys[i]]}`
//             }
//             string = string.substring(0, string.length -1);
//             string += '\n'
//         }
//         for (var i = 0; i < obj.children.length; i++) {
//             extractValues(obj.children[i]);
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
    res.send(convertJSON(req.body));
});

app.listen(3000);

