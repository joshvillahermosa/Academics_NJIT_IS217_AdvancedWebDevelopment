/*
*
*
*
*/

//Car function

function Car(options){
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}

function Truck (options){
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue";
}		 
	 
function VehicleFactory (){

}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options){
	if(options.vehicleType === "Car"){
		this.vehicleClass = Car;
	}else{
		this.vehicleClass = Truck;
	}
	
	return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType: "Car",
	color: "yellow",
	doors: 6});
	
console.log(car instanceof Car);

console.log(car);