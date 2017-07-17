
//storing the information in temporary memory
var http = require("http");
var url = require("url");
var parsedUrl  = url.parse('/itemsAvailable?model=nokia',true)
//	href: '/itemsAvailable?model=nokia',
//search: '?model=nokia',
//query: {model: 'nokia'},
//pathname: '/itemsAvailable'


               //information of the user 
 function reset(){
	var d = new Date();
	var date= d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	//var time = hour + ':'+min;
	//console.log(date,itemsAvailable[2].count,itemsAvailable[2].userId);
	
	if(hour==16&&min==52)
	{
	itemsAvailable[2].count=0;
	}
	}
exports.reset = reset;

var itemsAvailable  =[
{
	model : 'nokia',
	
	available : 10
},
{
	model: 'samsung',
	available: 20
},
 {
	userId : 1234,
	count : 0,//initially assigning count to 0 
	model: "",
	
}
];//create an object to store the itemsAvailable
exports.itemsAvailable = itemsAvailable;
	
var server = http.createServer(function(req,res){
	reset();//calling the reset after every request
	res.write("hello\n");
	if(itemsAvailable[2].count==0){ 
		if(parsedUrl.query.model==='nokia'&&itemsAvailable[0].available!=0){      //parsedUrl.query gives an object and .model gives nokia
		res.write("item chosen is nokia\n")	
		res.write("item can be bought");
		itemsAvailable[2].count++;                                                     // increasing the num of mobiles bought 
		console.log(itemsAvailable[2].count);
		itemsAvailable[0].available--;
		console.log(itemsAvailable[0].available)
		
	}}
	else{res.write("u cannot buy the item today come back tomorrow");}
	
	res.end()
}).listen(3000);

exports.server = server;
