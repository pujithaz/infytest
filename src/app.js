var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

const args = require('minimist')(process.argv.slice(2))
git_hash = args['git_hash']
app_version = args['app_version']

app.get("/healthCheck", (req, res, next) => {
 res.json(
{
"version": app_version,
"description" : "pre-interview technical test",
"lastcommitsha": git_hash
});
});