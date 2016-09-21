
//something like class or constructor or make fn or factory fn
var getObject = function (a) {
	this.name = a;
	this.print = function(){
		console.log("given name is "+this.name);
	}
}
var o1 = new getObject('sush');
o1.print();

//console.log(o1.getName());//here cannot be used, before definition


//dynamic plan or schema, adding members later
getObject.prototype.getName = function() {
	return this.name;
};

console.log("returning "+o1.getName());
