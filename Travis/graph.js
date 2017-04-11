const CHART=document.getElementById("lineChart");
//console.log(CHART);
var numberOfDataPoints = 30;//this is the number of data points for the graph. (i.e. number of elements in the y axis)
var totalData=0;
var totalDataPoints=0;
var removedElements = new Array(0);
var minuteData=0;
//initialize the x axis-time
var timeArray = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	timeArray[count]=count.toString();
	totalDataPoints++;
}

//initialize the y axis with random data-maybe change this later
var dataArray = new Array(numberOfDataPoints);
for(count=0; count<numberOfDataPoints; count++){
	dataArray[count]=(Math.random()*100);//random number between 1 and 100 (math.random outputs a number between 0-1)
	totalData+=dataArray[count];
	minuteData+=dataArray[count];
}


//create the chart for the data
let lineChart = new Chart(CHART,{
	type: 'line',
	data: {
		labels: timeArray,//["January", "test"], "February", "March", "April", "May", "June", "July"
		datasets: [
			{
				label: "Sensor Data",
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
	removedElements.push(dataArray[0]);
	dataArray.shift();
	dataArray[numberOfDataPoints-1]=(Math.random()*100);//new data point at end of array (random number)
	totalData+=dataArray[numberOfDataPoints-1];
	minuteData+=dataArray[numberOfDataPoints-1];
	timeArray.shift();
	timeArray[numberOfDataPoints-1]=(parseInt(timeArray[numberOfDataPoints-2])+1).toString();//increment the time by 1
	totalDataPoints++;
	
	data[0].currentData=(dataArray[numberOfDataPoints-1]).toFixed(4);
	data[0].minuteDataAverage=getMinuteAvg(removedElements, totalDataPoints,minuteData).toFixed(4);
	//data[0].hourDataAverage=getHourAvg(removedElements, totalDataPoints, minuteData).toFixed(4);
	data[0].totalDataAverage=(totalData/totalDataPoints).toFixed(4);
	if(totalDataPoints>60){
		minuteData-=removedElements[0];
		removedElements.shift();
	}
	
	lineChart.update();//update the graph
	
	
	//table.row(2).invalidate().draw();
},1000);


