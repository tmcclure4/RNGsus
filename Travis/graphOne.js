const CHARTONE=document.getElementById("lineChartONE");

var numberOfDataPoints = 30;//number of data points

//initialize the x axis
var timeArrayONE = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	timeArrayONE[count]=count.toString();
}

//initialize the y axis
var dataArrayONE = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	dataArrayONE[count]=(Math.random()*10);
}

let lineChartONE = new Chart(CHARTONE,{
	type: 'line',
	data: {
		labels: timeArrayONE,
		datasets: [
			{
				label: "Sensor Data One",
				fill: false,
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
	dataArrayONE.shift();
	dataArrayONE[numberOfDataPoints-1]=(Math.random()*10);//new data point at end of array (random number)

	timeArrayONE.shift();
	timeArrayONE[numberOfDataPoints-1]=(parseInt(timeArray[numberOfDataPoints-2])+2).toString();//increment the time by 1
	
	lineChartONE.update();//update the graph
},1000);
