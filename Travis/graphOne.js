const CHARTONE=document.getElementById("lineChartONE");

var numberOfDataPoints = 30;//number of data points
var totalDataONE=0;
var totalDataPointsONE=0;
var removedElementsONE = new Array(0);
var minuteDataONE=0;
//initialize the x axis
var timeArrayONE = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	timeArrayONE[count]=count.toString();
	totalDataPointsONE++;
}

//initialize the y axis
var dataArrayONE = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	dataArrayONE[count]=(Math.random()*10);
	totalDataONE+=dataArrayONE[count];
	minuteDataONE+=dataArrayONE[count];
}

let lineChartONE = new Chart(CHARTONE,{
	type: 'line',
	data: {
		labels: timeArrayONE,
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
				data: dataArrayONE,
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
					labelString: 'Time ONE (seconds)'
				}
			}],
			yAxes: [{//y axis
				display: true,
				scaleLabel:{
					display: true,
					labelString: 'Sensor Value ONE'
				}
			}]
		}
	}
});

//updates the graph every second
//update the values of the graph
setInterval(function(){
	removedElementsONE.push(dataArrayONE[0]);
	dataArrayONE.shift();
	dataArrayONE[numberOfDataPoints-1]=(Math.random()*10);//new data point at end of array (random number)
	totalDataONE+=dataArrayONE[numberOfDataPoints-1];
	minuteDataONE+=dataArrayONE[numberOfDataPoints-1];
	
	timeArrayONE.shift();
	timeArrayONE[numberOfDataPoints-1]=(parseInt(timeArrayONE[numberOfDataPoints-2])+1).toString();//increment the time by 1
	totalDataPointsONE++;
	data[1].currentData=(dataArrayONE[numberOfDataPoints-1]).toFixed(4);
	data[1].minuteDataAverage=getMinuteAvg(removedElementsONE, totalDataPointsONE,minuteDataONE).toFixed(4);
	//data[0].hourDataAverage=getHourAvg(removedElements, totalDataPoints, minuteData).toFixed(4);
	data[1].totalDataAverage=(totalDataONE/totalDataPointsONE).toFixed(4);
	if(totalDataPointsONE>60){
		minuteDataONE-=removedElementsONE[0];
		removedElementsONE.shift();
	}
lineChartONE.update();	
	
	//table.row(0).invalidate().draw();
},1000);
