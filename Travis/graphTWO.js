const CHARTTWO=document.getElementById("lineChartTWO");

var numberOfDataPoints = 30;//number of data points

var totalDataTWO=0;
var totalDataPointsTWO=0;
var removedElementsTWO = new Array(0);
var minuteDataTWO=0;


//initialize the x axis
var timeArrayTWO = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	timeArrayTWO[count]=count.toString();
	totalDataPointsTWO++;
}

//initialize the y axis
var dataArrayTWO = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	dataArrayTWO[count]=(Math.random()*50);
	totalDataTWO+=dataArrayTWO[count];
	minuteDataTWO+=dataArrayTWO[count];
}

let lineChartTWO = new Chart(CHARTTWO,{
	type: 'line',
	data: {
		labels: timeArrayTWO,
		datasets: [
			{
				label: "Sensor Data One",
				fill: true,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: dataArrayTWO,
				spanGaps: false,
			}
		]
	},
	options:{//label the x and y axis
		scales: {
			xAxes: [{//x axis
				display: true,
				scaleLabel:{
					display:true,
					labelString: 'Time TWO (seconds)'
				}
			}],
			yAxes: [{//y axis
				display: true,
				scaleLabel:{
					display: true,
					labelString: 'Sensor Value TWO'
				}
			}]
		}
	}
});

//updates the graph every second
//update the values of the graph
setInterval(function(){
	removedElementsTWO.push(dataArrayTWO[0]);
	dataArrayTWO.shift();
	dataArrayTWO[numberOfDataPoints-1]=(Math.random()*50);//new data point at end of array (random number)
	totalDataTWO+=dataArrayTWO[numberOfDataPoints-1];
	minuteDataTWO+=dataArrayTWO[numberOfDataPoints-1];
	
	timeArrayTWO.shift();
	timeArrayTWO[numberOfDataPoints-1]=(parseInt(timeArray[numberOfDataPoints-2])+1).toString();//increment the time by 1
	totalDataPointsTWO++;
	data[2].currentData=(dataArrayTWO[numberOfDataPoints-1]).toFixed(4);
	data[2].minuteDataAverage=getMinuteAvg(removedElementsTWO,totalDataPointsTWO,minuteDataTWO).toFixed(4);
	//data[2].hourDataAverage=getHourAvg(dataArrayTWO);
	data[2].totalDataAverage=(totalDataTWO/totalDataPointsTWO).toFixed(4);
	if(totalDataPointsTWO>60){
		minuteDataTWO-=removedElementsTWO[0];
		removedElementsTWO.shift();
	}
	lineChartTWO.update();//update the graph
	
	
	//table.row(1).invalidate().draw();
},1000);
