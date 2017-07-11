// varying the userids and inputting it from stdin
var http = require("http");
var url = require("url");
var fs = require("fs");
var readline=require("readline-sync");
var parsedUrl  = url.parse('/itemsAvailable?model=variable1&userId=variable2',true);
//href: '/itemsAvailable?model=nokia',
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

parsedUrl.query.model = readline.question('which one do u chose?');
if(parsedUrl.query.model=='nokia'){console.log("you have chosen nokia");};
if(parsedUrl.query.model=='samsung'){console.log("you have chosen samsung");};
parsedUrl.query.userId=readline.question("USER ID: ");

var phone = parsedUrl.query.model;
var valueOfUser = parsedUrl.query.userId;
var value1=arr[month]+String(date);
 
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
var nokia1 = itemsAvailable[0].available;
var samsung1 = itemsAvailable[1].available;


function reset(){
	var value ='userid'+String(parsedUrl.query.userId);   // check if user file exits
fs.readFile(value,'utf8',function(err,data){     
	var value1=arr[month]+String(date);
if(err) {                                                 // if there is an error in reading file
	console.log("error cant read");                        //i.e if the file does not exist
   
	    var Obj={[value1]:{"model":[phone],"count":0,"userid":[valueOfUser],"itemsLeftofNokia":[nokia1],"itemsLeftofSamsung":[samsung1]}}; // create
	    var p = JSON.stringify(Obj);                                            // a new file with name userid of that person 
		console.log(p);
		fs.closeSync(fs.openSync(value,'w'));
        fs.writeFile(value,p,'utf8',function(err,data){if(err)console.log("error writing data")});
	
	}
	else{
var Objr = JSON.parse(data);            // if the file already exists check if todaysdateproperty exists
console.log(Objr);
var value1=arr[month]+String(date);
var value2= arr[month]+String(date-1);
		if(Objr[value1]==undefined){       		// check if object property for todays date is defined
		console.log("date doesnot exist");
		var j = Objr[value2].itemsLeftofNokia; 
		var l = Objr[value2].itemsLeftofSamsung;
		Objr[value1]= {"model":[phone],"count":0,"userid":[valueOfUser],"itemsLeftofNokia":[j],"itemsLeftofSamsung":[l]}}; 
        // if not defined include    todaysdate property
		console.log(Objr);
		var w = JSON.stringify(Objr);
fs.writeFile(value,w,'utf8',function(err,data){if(err) console.log("cant write")});}// after adding it to the object write into file
	
});}
	


reset();
http.createServer(function(req,res){
	//if(phone=='nokia'){nokia1--;}
	//else if(phone=='samsung'){samsung1--;}
	var value1=arr[month]+String(date);
	var value ='userid'+String(parsedUrl.query.userId);
	
	fs.readFile(value,'utf8',function(err,data){
	
if(err) console.log("cannot read file");
	    
else 
{ 
      var Obj2=JSON.parse(data);
	if(Obj2[value1].count==0)                             
    {
	 res.write("u can buy the item");              // check if count value=0
	 Obj2[value1].count=1; 	                      //if yes change it to 1
	 Obj2[value1].model=phone;
	 console.log("true");
	 if(phone=='nokia'){Obj2[value1].itemsLeftofNokia--;} // if chosen nokia decrement the nokia count 
	else if(phone=='samsung'){Obj2[value1].itemsLeftofSamsung--;} //similarly for samsung
	                  
	 var n = Obj2[value1].itemsLeftofNokia;	     // create a variable whose value equals total no of items bought 
	 var m=Obj2[value1].itemsLeftofSamsung;
	 var value3 =arr[month]+String(date+1);      // create tomorrows date and append it to the existing userid object file
     Obj2[value3]={"model":[phone],'count':0,'userId':[valueOfUser],"itemsLeftofNokia":[n],"itemsLeftofSamsung":[m]};
     console.log(Obj2);
     console.log(Obj2[value3].model);

     var t=JSON.stringify(Obj2);
     fs.writeFile(value,t,'utf8',function(err,data){if(err){console.log("cant write");}})
    }
    else {res.write("u cannot buy the item");}
}

res.end();
	})
}).listen(3000);
	