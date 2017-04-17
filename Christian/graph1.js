TESTER1 = document.getElementById('tester1');

function rand1() {
  return Math.floor((Math.random() * 100) + 1);
  }

var sensor1 = {
	y: [10, 15, 13, 17].map(rand1),
	name: 'Individual Sensor 4',
	type: 'scatter'
};

var sensor2 = {
	y: [16, 5, 11, 9].map(rand1),
	name: 'Individual Sensor 3',
	type: 'scatter'
};

var data = [sensor1, sensor2];

var layout = {
	title: 'Sensor Test 2',
	xaxis: {
		title: 'Seconds',
		// showgrid: false,
		// zeroline: false
		titlefont: {
			family: 'Courier New, , monospace',
			size: 18,
			color: '#7f7f7f'
		}
	},
	yaxis: {
		title: 'Percent',
		// showline: false
	}
};
Plotly.newPlot(tester1, data, layout, {displaylogo: false});
Plotly.restyle(tester1, {'line.color': ['green', 'blue']}, [0, 1]);

/* Current Plotly.js version */
console.log( Plotly.BUILD );

//the following function occurs every one second
//update the array values to update the graph
var cnt = 0;
var interval1 = setInterval(function() {
  Plotly.extendTraces('tester1', {
    y: [[rand1()], [rand1()]]
  }, [0, 1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval1);
}, 1500);

