
//something like class or constructor or make fn or factory fn
var VehicleObject = function (color,kind) {
	this.color = color;
	this.kind = kind;
	this.print = function(){
		console.log("given color is "+this.color);
	}
}

// VehicleObject.prototype.getkind() = function() {
// 	return this.kind;
// };
console.log(VehicleObject.prototype);
var isAlsoCarVehicle = function (car,vehicle) {
	car.prototype = Object.create(vehicle.prototype);
	console.log(vehicle.prototype);
	console.log('car inheriting properties from vehicle');
}

var CarObject = function(brand,color){
	this.kind = 'car';
	this.color = color;
	this.brand = brand;
}

isAlsoCarVehicle(CarObject,VehicleObject);

var car1 = new CarObject('hyundai','white');
console.log(car1);
// car1.print();
// car1.getkind();

