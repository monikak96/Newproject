// storing in the same file . the information is stored in the form of an object
var http = require("http");
var url = require("url");
var fs = require("fs");
var parsedUrl  = url.parse('/itemsAvailable?model=nokia',true)
//	href: '/itemsAvailable?model=nokia',
//search: '?model=nokia',
//query: {model: 'nokia'},
//pathname: '/itemsAvailable'
var d = new Date();
	var date= d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();	
var itemsBought =0;	
var month = d.getMonth()-1;
var arr=['jan','feb','mar','may','june','july','aug','sept','oct','nov','dec'];
 var value1=arr[month]+String(date);
 console.log(value1);
 
function reset(){
fs.readFile("./filenew.js",'utf8',function(err,data){
if(err) console.log("error cant read");
var Obj = JSON.parse(data);
console.log(Obj);
 var value1=arr[month]+String(date);
  var value2= arr[month]+String(date-1);
  var j = Obj[value2].itemsbought;
		if(Obj[value1]==undefined){                                   // check if object property for todays date is defined
			Obj[value1]= {"model":"nokia","count":0,"userid":1234,"itemsbought":[j]}};  // if not defined include todaysdate property
		console.log(Obj);
		var w = JSON.stringify(Obj);
		fs.writeFile("./filenew.js",w,'utf8',function(err,data){if(err) console.log("cant write")});// after adding it to the object write into file
	
});}
	
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

reset();
http.createServer(function(req,res){
	//set();//calling the reset after every request
	
	if(parsedUrl.query.model=='nokia')
	{
	itemsAvailable[0].available--;
	res.write("u have chosen nokia\n");
	fs.readFile("./filenew.js",'utf8',function(err,data)
	{
	if(err){console.log("cantread")}
else{
	var Obj= JSON.parse(data);
 if(Obj[value1].count==0)                             
 {
	 res.write("u can buy the item");              // check if count value=0
	 Obj[value1].count=1;                         //if yes change it to 1
	 console.log("true");
	 Obj[value1].itemsbought++;                 // increment the number of items bought 
	 var k = Obj[value1].itemsbought;          // create a variable whose value equals total no of items bought 
	var value =arr[month]+String(date+1);      
Obj[value]={'model':'nokia','count':0,'userId':1234,"itemsbought":[k]};
console.log(Obj);
console.log(Obj[value].model);

var t=JSON.stringify(Obj);
fs.writeFile("./filenew.js",t,'utf8',function(err,data){if(err){console.log("cant write");}})
	}
	else{res.write("u can not buy the item today")};
 };
	
res.end();
})
}}
).listen(3000)