var express = require('express');
var app = express();
const dba = require('./rundatabase.js');
//const query = require('./dbqueries.js');
let db = dba.connect();
app.use(express.json())

app.get('/', function (req, res) {
    res.sendFile("index.html", {root: __dirname});
});


app.get('/api/users', function (req, res) {
    query.getUsers(db, req, res);
    console.log(req, res);
});

app.listen(3000, function() {
    dba.init(db);
    console.log("Server is listening!");
})