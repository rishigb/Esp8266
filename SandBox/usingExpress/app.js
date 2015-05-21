var express = require('express');
var app =express();

app.get('/sensorValue',function(req,res){
	var curDate = new Date();
	var timeNow = curDate.getDate()+"/"+curDate.getHours()+"/"+curDate.getMinutes();
	console.log("Temp: ",req.query.temp);
	console.log("Pressure: ",req.query.pressure);
	console.log("Time: ",timeNow);
});

var server = app.listen(3000,function(){
	console.log('listening on port 3000 ');
});
