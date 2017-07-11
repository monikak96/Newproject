var http = require("http");
var url = require("url");
var parsedUrl  = url.parse('/itemsAvailable?model=value',true)
//	href: '/itemsAvailable?model=nokia',
//search: '?model=nokia',
//query: {model: 'nokia'},
//pathname: '/itemsAvailable'


var  information = {
	userId : 1234,
	count : 0,//initially assigning count to 0 
	model: "",
	
};                 //information of the user 
function reset(){
	var d = new Date();
	var date= d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	//var time = hour + ':'+min;
	//console.log(date,information.count,information.userId);
	
	if(hour==16&&min==52){
	information.count=0;
			}
	}


var itemsAvailable  =[
{
	model : 'nokia',
	available : 10
},
{
	model: 'samsung',
	available: 20
}
];//create an object to store the itemsAvailable

	
http.createServer(function(req,res){
	reset();//calling the reset after every request
	res.write("hello\n");
	if(information.count==0){ 
		if(parsedUrl.query.model==='nokia'&&itemsAvailable[0].available!=0){      //parsedUrl.query gives an object .model gives nokia
		res.write("item chosen is nokia\n")	
		res.write("item can be brought");
		information.count++;                                                     // increasing the num of mobiles bought 
		//console.log(information.count);
		itemsAvailable[0].available--;
		//console.log(itemsAvailable[0].available)
		
	}}
	else res.write("u cannot buy the item today come back tomorrow")
	
	res.end()
}).listen(3000)


