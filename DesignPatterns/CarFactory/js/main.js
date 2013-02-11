/*
*
*
*
*/

//Car function

function Car(options){
	this.doors = options.door || 4;
	this.state = option.state || "brand new";
	this.color = option.color || "silver";
}

function Truck (options){
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = option.color || "blue";
}		 
	 
function VehicleFactory (){

}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options){
	if(options.vehicleType == "Car"){
		this.vehicleClass = Car;
	}else{
		this.vehicleClass (options);
	}
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType: "car",
	color: "yellow",
	doors: 6
	});
	
console.log(car instanceof Car);

console.log(car);