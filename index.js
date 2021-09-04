var express = require('express');

var app = express();

function helloWord(){
    return 'hola mundo'
}

app.get('/', function(req, res){
    res.send(helloWord());
});

app.listen(process.env.PORT || 3000);

module.exports = {
    app,
    helloWord
}