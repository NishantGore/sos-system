const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req, res){
	console.log("GET request received!");
	res.send("GET request received");
})

app.post('/location',function(req, res){
	res.send("POST received");
	console.log(`Location is: ${req.body.latitude},${req.body.longitude}`);
});

app.listen(8080, function(){
	console.log("Server running on port 8080");
})