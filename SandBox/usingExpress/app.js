var express = require('express');
var app =express();

/* This function will calculate and tell you if the temp is physical conditions are good */

function physicalConditions(temp, pres){
	if (temp > 30 || pres >10){
		console.log("Too hot");
			}
	else {
		console.log("Its fine bro");
	}
}

app.get('/sensorValue',function(req,res){
	var curDate = new Date();
	var timeNow = curDate.getDate()+"@"+curDate.getHours()+":"+curDate.getMinutes();
	console.log("Temp: ",req.query.temp);
	console.log("Pressure: ",req.query.pressure);
	console.log("Time: ",timeNow);
	//console.log(typeof temp);
	physicalConditions(parseInt(req.query.temp),parseInt(req.query.pressure));
});

var server = app.listen(3000,function(){
	console.log('listening on port 3000 ');
});
