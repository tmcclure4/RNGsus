TESTER1 = document.getElementById('tester1');

function rand1() {
  return Math.floor((Math.random() * 100) + 1);
  }

var sensor4 = {
	x: [],
	y: [].map(rand1),
	name: 'Individual Sensor 4',
	type: 'scatter'
};

var sensor3 = {
	x: [],
	y: [].map(rand1),
	name: 'Individual Sensor 3',
	type: 'scatter'
};

var data = [sensor3, sensor4];

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

//the following function occurs every one second
//update the array values to update the graph
var cnt1 = 0;
var interval1 = setInterval(function() {
  Plotly.extendTraces('tester1', {
	x: [[cnt1*5], [cnt1*5]],  
    y: [[rand1()], [rand1()]]
  }, [0, 1])

  cnt1 = cnt1 + 1;
  if(cnt1 === 75) clearInterval(interval1);
}, 5000);

