var path = require('path');
var express = require('express');
var app = express();
var port = 3000;
var staticPath = path.resolve(__dirname, '/app');

app.use(express.static(staticPath));
app.listen(port, function() {
  console.log('\n http://localhost:'+port+'\n');
});