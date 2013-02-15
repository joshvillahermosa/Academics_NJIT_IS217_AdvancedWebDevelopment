/*
*
*
*
*/

//Car function
/*
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

document.getElementById('Example1').innerHTML = car;
*/


//Usefull stuff
/*
var a = document.createElement('a');

var div = document.getElementByID('header');
a.textContent = 'click me';

a.href = 'http://www.google.com';
console.log(div);
div.appendChild(a);
div.setAttribute("class", "green");
*/

//LINK FACTORY

/*
function createLink(array){
	var linkList = [];
	for(var i = 0; i< array.length; i++){
		var link = document.createElement('a');
		link.href = array[i];
		link.textContent= i+1;
		linkList.push(link);
	}
	return linkList
}

console.log(createLink(array));
*/
var links = ["http://www.facebook.com", "http://www.twitter.com", "http://www.google.com"];

//Must return a Object
function makeLink(links){
	var div = document.getElementById('header');
	var linkList = [];
	for(var i = 0; i <= links.length; i++){
			//console.log(links[i]);
			var a = document.createElement('a');
			a.textContent = 'Click me -'+i;
			a.href = links[i];
			//console.log(a);
			//div.appendChild(a);
			linkList.push(a);
	}
	return linkList;
}

console.log(makeLink(links));




