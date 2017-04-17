TESTER2 = document.getElementById('tester2');

function rand2() {
  return Math.floor((Math.random() * 85) + 1);
  }

var sensor1 = {
	y: [0].map(rand1),
	name: 'Individual Sensor 5',
	type: 'scatter'
};

var sensor2 = {
	y: [0].map(rand1),
	name: 'Individual Sensor 6',
	type: 'scatter'
};

var data = [sensor1, sensor2];

var layout = {
	title: 'Sensor Test 3',
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
		title: 'MPH',
		// showline: false
	}
};
Plotly.newPlot(tester2, data, layout, {displaylogo: false});
Plotly.restyle(tester2, {'line.color': ['purple', 'chestnut brown']}, [0, 1]);

/* Current Plotly.js version */
console.log( Plotly.BUILD );

//the following function occurs every one second
//update the array values to update the graph
var cnt = 0;
var interval2 = setInterval(function() {
  Plotly.extendTraces('tester2', {
    y: [[rand2()], [rand2()]]
  }, [0, 1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval2);
}, 2000);

