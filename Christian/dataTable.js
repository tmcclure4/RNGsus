

var data = [
    { "sensor" : "Lumosity", "currentData" : "0", "minuteDataAverage": "0", "totalDataAverage": "0" },
	{ "sensor" : "Speed", "currentData" : "0", "minuteDataAverage": "0", "totalDataAverage": "0" },
	{ "sensor" : "Temperature", "currentData" : "0", "minuteDataAverage": "0", "totalDataAverage": "0" }
];
    
var table = $('#example').DataTable({ 
    data : data,
    columns : [
        { data : "sensor", title :'Sensor' },
        { data : "currentData", title : 'Current Data' },
		{ data : "minuteDataAverage", title : 'Minute Data Average'},
		//{ data : "hourDataAverage", title : 'Hour Data Average'},
		{ data : "totalDataAverage", title : 'Total Data Average'}
    ]
})

setInterval(function(){
	table.row(0).invalidate().draw();
	table.row(1).invalidate().draw();
	table.row(2).invalidate().draw();
	//table.row(3).invalidate().draw();
	//table.fnDraw();
	//testFn(tester.data);
},1000);

 