var express = require('express');
var app = express();

const args = require('minimist')(process.argv.slice(2))
var git_hash = args['git_hash']
var app_version = args['app_version']

app.get('/', function (req, res) {
  res.status(200).send('ok');
});
app.get('/healthCheck', function (req, res) {
  res.status(200).json({
                        "version": app_version,
                        "description" : "pre-interview technical test",
                        "lastcommitsha": git_hash
                        });
});
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Health Check app listening at port %s', port);
});
module.exports = server;