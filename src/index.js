var express = require('express');

var app = express();
app.disable("x-powered-by");

function helloWord(){
    return 'hola mundo'
}

app.get('/', function(req, res){
    res.send(helloWord());
});

const server = app.listen(process.env.PORT || 3000);

module.exports = {
    app,
    helloWord,
    server,
}