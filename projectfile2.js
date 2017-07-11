//storing new information into a new file each time a request is made
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
	
	if(parsedUrl.query.model=='nokia')
	{
	    res.write("u have chosen nokia\n")
     	var str= String(date);
		fs.readFile(str,'utf8',function(err,data){
		if(err){console.log("cannot read the file");}
		
		var s= data.split("\n");
		    if(s=="count=0")
			    {
					res.write("you can buy the item")
			fs.writeFile(str,"count=1",'utf8',function(err,data){if(err) console.log("error writing data");})
				var fname= String(date+1);
				fs.openSync(fname,'w')
				fs.writeFile(fname,'count=0','utf8',function(err,data){
					if(err){console.log("error writing into file");}})
		        }
			else {res.write("you cannot buy the item today");}
		res.end();})
		
			
    }
}).listen(3000)
