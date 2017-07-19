var http=require("http");
var Code = require("../proj3Mocha");
var fs= require("fs");
describe("reset function",function(){
	it("reading file",function(){
		fs.readFile('./filenew.js','utf8',function(err,data){
			if(err){ throw 'error occured';}
		var Obj = JSON.parse(data);
		if(Obj[Code.value1]==undefined){
				var items = Code.itemsAvailable;
				Obj[Code.value1]= {"model":"nokia","count":0,"userid":1234,"itemsbought":[items[0].available]}; 
				var w = JSON.stringify(Obj);
					fs.writeFile('./filenew.js',Code.reset.w,'utf8',function(err,data){
			if(err)throw 'error writing file';});
		}
				
				
				
				})
	});
		
		
			
	});


describe('/',function(){
		before(function (done) {
		Code.server.listen(3000,done);
		});
		after(function (done) {
		Code.server.close(done);
		});

describe('http request',function(){
it("starting the request",function(done){
	
http.get("http://localhost:3000",function(res)
{
	it('checking model type',function(){
		if(Code.server.parsedUrl.query.model=='nokia'){
			assert.equal(Code.server.res,'u have chosen nokia\n');
			fs.readFile('./filenew.js','utf8',function(err,data){
				if(err) throw 'error reading file';
				else var Obj = JSON.parse(data);
				
				if(Obj[Code.value1].count==0){
			
		assert.equal(Code.server.res,'u can buy the item')
		var t = Code.Obj[Code.value];
		
		fs.writeFile('./filenew.js',t,'utf8',function(err,data){
			if(err) throw ' cannot write file'
		})
		}
	
		})
		}
	})
	done();
})
});
});})		
		
		
		
