
function getDataIfLessThanExpected(tempDataArray, totalDataPoints){
	var sum=0;
	tempDataArray.forEach(function(dataValue){
			sum+=parseInt(dataValue);
	});
	return (sum/totalDataPoints).toFixed(4);	
}


function getSpecificAvg(numToAvg, specificDataArray){
	var specificSum=0;
	for(count=0;count<numToAvg;count++){
		specificSum+=specificDataArray[specificDataArray.length-1-count];
	}
	return (specificSum/numToAvg).toFixed(4);
}


function getMinuteAvg(minuteDataArray, totalDataPoints, totalData){
	var minuteAverage=0;
	if(totalDataPoints<=60){
		minuteAverage=totalData/totalDataPoints;
		//minuteAverage=getDataIfLessThanExpected(minuteDataArray,totalDataPoints);
	}
	else{
		minuteAverage=(totalData-minuteDataArray[0])/60;
		//minuteAverage=getSpecificAvg(60,minuteDataArray);
	}
	return minuteAverage;
}

function getHourAvg(hourDataArray, totalDataPoints,totalData){
	var hourAverage=0;
	//less than an hour
	if(hourDataArray.length<3600){
		hourAverage=totalData/totalDataPoints;
		//hourAverage=getDataIfLessThanExpected(hourDataArray, totalDataPoints);
	}
	else{//more than an hour
		hourAverage=getSpecificAvg(3600,hourDataArray);
	}
	return hourAverage;
}

//see if this works. It does.
function testFn(data) {
	var total = 0;
	for (i = 0; i < data[0].y.length; i++) {
		total += data[0].y[i];
	}
	var avg = total/data[0].y.length;
	console.log(avg);
	return avg;
	
}