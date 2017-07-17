var assert = require("chai").assert;

var http= require("http");

var Code = require("../f");


 describe("itemsAvailable",function(){
		it("information count",function(){
			assert.equal(Code.itemsAvailable[2].count,0);
		})
		
	});
	

	describe("information count",function(){
	it("reset",function()
	{
		if(Code.reset.hour==16&&Code.reset.min==52){
		assert.equal(Code.reset.itemsAvailable[2].count,0);}
	});
	})
	
	

describe('/',function(){
	
	before(function (done) {
Code.server.listen(3000,done);
		});

		after(function (done) {
Code.server.close();
		});

	describe("http request",function(){
		
	it('buy the item',function(done){
		
	http.get("http://localhost:3000",function(res){
		
//assert.equal(Code.server.res,'hello');
		
		if(Code.itemsAvailable[2].count==0){
			if(Code.parsedUrl.query.model=='nokia'&&Code.itemsAvailable[0].available!=0){

			it("item can be bought",function(done){
	assert.equal(Code.server.res,'item chosen is nokia');
			assert.equal(Code.server.res,'item can be bought');
			done();
			})
		}};
		
it("item can not be bought",function(done){
	assert.equal(Code.server.res,'u cannot buy the item today come back tomorrow');
	done();
		})
					})
done();})

});		})
