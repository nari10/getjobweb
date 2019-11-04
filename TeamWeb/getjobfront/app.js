var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function(req, res){
    fs.readFile('index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.get('/login', function(req, res){
    fs.readFile('login/index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.get('/member', function(req, res){
    fs.readFile('member/index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.get('/it_introduction', function(req, res){
    fs.readFile('it_introduction/index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.get('/calendar', function(req, res){
    fs.readFile('calendar/index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.get('/offer', function(req, res){
    fs.readFile('offer/index.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
});

app.use('/_common', express.static('_common'));
app.use('/_static/calendar', express.static('_static/calendar'));
app.use('/it_introduction/static', express.static('it_introduction/static'));
app.use('/_static/member', express.static('_static/member'));
app.use('/offer/static', express.static('offer/static'));


app.listen(3000, function(){
    console.log('Server Started.');
});