var dataCount=0;

function getDataIfLessThanExpected(tempDataArray){
	var sum=0;
	tempDataArray.forEach(function(dataValue){
			sum+=parseInt(dataValue);
	});
	return (sum/tempDataArray.length).toFixed(4);	
}


function getSpecificAvg(numToAvg, specificDataArray){
	var specificSum=0;
	for(count=0;count<numToAvg;count++){
		specificSum+=specificDataArray[specificDataArray.length-1-count];
	}
	return (specificSum/numToAvg).toFixed(4);
}


function getMinuteAvg(minuteDataArray){
	var minuteAverage=0;
	if(minuteDataArray.length<=60){
		minuteAverage=getDataIfLessThanExpected(minuteDataArray);
	}
	else{
		minuteAverage=getSpecificAvg(60,minuteDataArray);
	}
	return minuteAverage;
}

function getHourAvg(hourDataArray){
	var hourAverage=0;
	//less than an hour
	if(hourDataArray.length<3600){
		hourAverage=getDataIfLessThanExpected(hourDataArray);
	}
	else{//more than an hour
		hourAverage=getSpecificAvg(3600,hourDataArray);
	}
	return hourAverage;
}

//see if this works
/*function getTotalAvg(totalDataArray){
	return getDataIfLessThanExpected(totalDataArray);
}*/
