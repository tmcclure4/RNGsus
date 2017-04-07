const CHART=document.getElementById("lineChart");
//console.log(CHART);
var numberOfDataPoints = 30;//this is the number of data points for the graph. (i.e. number of elements in the y axis)

//initialize the x axis-time
var timeArray = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	timeArray[count]=count.toString();
}

//initialize the y axis with random data-maybe change this later
var dataArray = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	dataArray[count]=(Math.random()*100);//random number between 1 and 100 (math.random outputs a number between 0-1)
}


//create the chart for the data
let lineChart = new Chart(CHART,{
	type: 'line',
	data: {
		labels: timeArray,//["January", "test"], "February", "March", "April", "May", "June", "July"
		datasets: [
			{
				label: "Sensor Data",
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
				data: dataArray,
				spanGaps: false,
			}
		]
		
	},
	options: {//this is the area where we can have x and y labels
            scales: {
                xAxes: [{//x axis label
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Time (seconds)'
                  }
                }],
                yAxes: [{//y axis label
                    display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Sensor Value'
                  }
                }]
            }
        }

});

//the following function occurs every one second
//update the array values to update the graph
setInterval(function(){
	dataArray.shift();
	dataArray[numberOfDataPoints-1]=(Math.random()*100);//new data point at end of array (random number)

	timeArray.shift();
	timeArray[numberOfDataPoints-1]=(parseInt(timeArray[numberOfDataPoints-2])+1).toString();//increment the time by 1
	
	lineChart.update();//update the graph
},1000);


