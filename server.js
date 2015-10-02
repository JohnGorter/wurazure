var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('app'));

app.get("/students", function(req, res){
   var students = [{ id:1, firstname:"john", lastname:"Gorter"}, { id:2, firstname:"john", lastname:"Gorter"}]
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(students));
  
}); 
app.get('/john', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

app.listen(1337);

console.log('Server is running at http://127.0.0.1:1337/');