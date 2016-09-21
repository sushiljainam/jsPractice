var y = Infinity;
var x = undefined;
//var console =3; //disastrous
console.log("hello world");
console.log("x is "+x);
console.log("y is "+y);
cube = function(i){return i*i*i};
for ( i = 5; i >= 1; i--) { // "var i = 5" or only "i = 5" -- both OKAY
	if (i%2===0) {
		console.log(i+" -- "+cube(i));
	} else{
		console.log(i+" -- "+sqr(i));
	};
};
/*function cube( i) {
	return i*i*i;
}
*/function sqr(i){
	return i*i;
}
//next

var a = 'sushil';
console.log('str length is '+a.length);

//
var b = {};
b.s = 3;
b.fun1 = function(){return b.s*12;}
console.log(b.s);
console.log(b.fun1());

//
b.z;
b.fun2 = function(){return b.z*11;}
console.log(b.s);
console.log(b.fun2());


//
console.log({}==={});
console.log('a'==='a');

//
console.log("immutabilty----------")
console.log('asdn'.length);
var p = 'sdkjseifj';
p.df = 'sad';
console.log(p.df);//undefined

//
console.log("plain objects----------");
o = {
	name: {
		fn: 'sushil',
		ln: 'jain'
	},
	email: 'sushiljain@creatiosoft.com',
	nameP: function(){return o.name.fn+' '+this.name.ln},
	//this also works
};

console.log(o.email);
console.log(o.email.length);
console.log(o.nameP());
console.log(o.nameP().length);//this is good
console.log(o.name.ln);

//
console.log("----------");
console.log(typeof '');
console.log(typeof null);//can't be fixed, bug
console.log(typeof 3);
console.log(typeof typeof 3);// output of typeof is string

//
console.log(Boolean(0));
console.log({});

//
console.log(0&&7);//0
console.log(7&&8);//8
console.log(8&&0);//0
console.log(0&&7&&4);//0
console.log(7&&8&&3);//3
console.log(8&&0&&8);//0
//returning first falsy else last


console.log('a');
console.log(a);

console.log(console);

console.log(console.log);
console.info(a);



console.log('a'+3+4+'a');
console.log(3+4+'a');

/////
//console.log(multi(3,5));// DOESN'T WORK
multi = function(p,q){return p*q};

cx = console;
////
function getP(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: '+id);
    }
    return { id: id }; // normally: retrieved from database
};
function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getP(id);
            result.push(person);
        } catch (e) {
            cx.log(e);
        }
    });
	cx.log(result);
    return result;
}
getPersons([2,-3,4]);


function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3;  // (1)
    }
}

//very weird --- its called closure
function incre(r){return function(){ return ++r;}}
var i = incre(0);
console.log(i());
console.log(i());


///below one gives error
//function (r){return r*2;}
var r = function (r){return r*2;};
r =312;//r(312) here okay -- not after this line -- r is Function
//r(312);//gives an error
//r = r(34);//not okay -- now r is number
console.log(r);

var w = function s(r){return r*2;};//s is ignored or overwritten
//'var' is optional
console.log(w(4));
//console.log(s(14));//not okay


cx.log();
cx.log();


/*
 *resany = function(){};
 *res[0] = function(){return 0;}
 *res[1] = function(){return 1;}
 *res[2] = function(){return 2;}
 *res[3] = function(){return 3;}
 *res[4] = function(){return 4;}
 */
arres = [];
for (var i = 0; i < 5; i++) {
	arres.push(function(){return i;});
	console.log(arres[i]());
}
console.log(arres[4]());
console.log(arres[1]());
console.log(arres);

cx.log();
cx.log();



arres2 = [];
for (var i = 0; i < 10; i++) {
	arres2.push(function(){return i*2;});
	console.log(arres2[i]());
}
console.log(arres2[4]());
console.log(arres2[1]());
console.log(arres2);

cx.log();
cx.log();



arres2 = [];
for (var i = 0; i < 10; i++) {
	arres2.push(function(){return i*2;}());
	console.log(arres2[i]);
}
console.log(arres2[4]);
console.log(arres2[1]);
console.log(arres2);


cx.log();
cx.log();


arres = [];
for (var i = 0; i < 5; i++) {
	var i2 = i;
	arres.push(function(){return i2;});
	console.log(arres[i]());
}
console.log(arres[4]());
console.log(arres[1]());
console.log(arres);


cx.log();
cx.log();


arres = [];
for (var i = 0; i < 5; i++) {
	(function(){
	var i2 = i;
	arres.push(function(){return i2;});
	}());
	console.log(arres[i]());
}
console.log(arres[4]());
console.log(arres[1]());
console.log(arres);

{ foo:'str'.length;};

{
    foo: cube(3)
}
function foo() { }
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();