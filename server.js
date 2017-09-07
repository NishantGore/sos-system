const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
var port = process.env.PORT || 8080;

app.get('/',function(req, res){
	console.log("GET request received!");
	res.send("GET request received");
})

app.post('/location',function(req, res){
	res.send("POST received");
	console.log(`Location is: ${req.body.latitude},${req.body.longitude}`);
});

app.listen(port, function(){
	console.log("Server running on port ${port}");
})