TESTER = document.getElementById('tester');

function rand() {
  return Math.floor((Math.random() * 100) + 1);
}

var sensor1 = {
	y: [10, 15, 13, 17].map(rand),
	name: 'Individual Sensor 1',
	type: 'scatter'
};

var sensor2 = {
	y: [16, 5, 11, 9].map(rand),
	name: 'Individual Sensor 2',
	type: 'scatter'
};

var data = [sensor1, sensor2];

var layout = {
	title: 'Sensor Test',
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
Plotly.newPlot(tester, data, layout, {displaylogo: false});
Plotly.restyle(tester, {'line.color': ['red', null]}, [0, 1]);

/* Current Plotly.js version */
console.log( Plotly.BUILD );

//the following function occurs every one second
//update the array values to update the graph
var cnt = 0;
var interval = setInterval(function() {
  Plotly.extendTraces('tester', {
    y: [[rand()], [rand()]]
  }, [0, 1])

  cnt = cnt+1;
  if(cnt === 100) clearInterval(interval);
}, 1000);

