var rl = process.openStdin();
var regex = /.*/;
console.log('Initial regex is '+regex);
rl.addListener("data", function(d) {

    var input = d.toString().trim();
    if(/^\/.+\/$/.test(input)){
    	regex = new RegExp(input.slice(1,(input.length-1)));
    	console.log('regex changed to:'+input);
    } else {
    	var toTest = input;
        var result = regex.test(toTest);
    	//console.log(regex+'.test("'+toTest+'") is : '+result);
        console.log('matches with "'+toTest+'": '+result);
    }
    if (d.toString().trim()==='end') {
        console.log('bye!')
    	rl.destroy();
    };

  });