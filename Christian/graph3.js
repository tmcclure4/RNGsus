TESTER3 = document.getElementById('tester3');

function rand3() {
  return Math.floor((Math.random() * 85) + 1);
  }

var sensor7 = {
	y: [0].map(rand2),
	name: 'Individual Sensor 7',
	type: 'scatter'
};

var sensor8 = {
	y: [0].map(rand2),
	name: 'Individual Sensor 8',
	type: 'scatter'
};

var data = [sensor7, sensor8];

var layout = {
	title: 'Sensor Test Same Tab',
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
Plotly.newPlot(tester3, data, layout, {displaylogo: false});
Plotly.restyle(tester3, {'line.color': ['black', 'aqua']}, [0, 1]);

//the following function occurs every one second
//update the array values to update the graph
var cnt3 = 0;
var interval3 = setInterval(function() {
  Plotly.extendTraces('tester3', {
    y: [[rand3()], [rand3()]]
  }, [0, 1])

  cnt3 = cnt3 + 1;
  if(cnt3 === 50) clearInterval(interval2);
}, 2000);

