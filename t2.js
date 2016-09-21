/*
v = [1,2,3,4];
vv = v.map(function (i) { return i*i;});
console.log(vv);

console.log([1,2,3,4,5].map(function(elem){return Math.sqrt(elem);}));

*/
//const readline = require('readline');
//regular expressions
v = /^a/.test('asdasaabb');
console.log(v);
console.log(/.*/.test('/^a+b+$/'));
console.log(/^\/.*\/$/.test('/^a+b+$/'));
console.log(/^\/.\/$/.test('/^a+b+$/'));
console.log(/^a/.test('/^a+b+$/'));
console.log(/^a/.test('/^a+b+$/'));
//s = readline();

var rl = process.openStdin();

    var regex = /.*/;
rl.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    var input = d.toString().trim();
    if(/^\/.+\/$/.test(input)){
    	regex = new RegExp(input.slice(1,(input.length-1)));
    	console.log('regex changed to:'+regex);
    }else
    {
    	var toTest = input;
    	console.log(regex+'.test("'+toTest+'") is : '+regex.test(toTest));
    }
    if (d.toString().trim()==='end') {
    	rl.destroy();
    };
  });

/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('type a reqex (without slashes) ', 
	function (r) {
		var regex = '/'+r+'/';
		rl.close();
	});
rl.question('type examples to match',
	function(m){
		console.log(regex.test(m));
	});*/