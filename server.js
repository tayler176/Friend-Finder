var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user:"root",
    password: "root",
    database: ""
});


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });