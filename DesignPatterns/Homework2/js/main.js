/*
*IS217 - Adv Web Development
*Homework 2
*Design PAtterns
*Joshua John Villahermosa
*/

//*******************
//	Defined functions
//*******************
//*********************
//Factory and Decorator
//*********************
function robotFactory(){}
robotFactory.prototype.createRobot = function(){
	var robot = function(){
		this.name = '';
		this.arms = 2;
		this.legs = 2;
		this.material = 'Aluminum';
		this.tool = '';
	};
	
	robot.prototype.nameInfo = function (){
		if (!this.name){
			console.log('I have no name.\n')
		}else{
			console.log('My name is '+this.name+'.\n');
		}
	};

	robot.prototype.nameSet = function (name){
		this.name = name;
	};

	robot.prototype.armsInfo = function (){
		if (!this.arms){
			console.log('I have no arms.\n')
		}else{
			console.log('I have '+this.arms+' arms.\n');
		}
	};

	robot.prototype.legsInfo = function (){
		if (!this.legs){
			console.log('I have no legs.\n')
		}else{
			console.log('I have '+this.arms+' legs.\n');
		}
	};
	
	robot.prototype.materialInfo = function (){
		console.log('I am made out of '+this.material+'.\n');
	};
	
	robot.prototype.toolInfo = function (){
		if (!this.tool){
			console.log('I have no tools.\n')
		}else{
			console.log('I have '+this.tool+'.\n');
		}
	};

	robot.prototype.toolSet = function (tool){
		this.tool = tool;
	};	

	console.log('Robot Created! \n');
	return new robot;
};
//****************
//Pattern end
//****************
//Decorator Pattern
//****************

function modFactory (robot){
	robot.setColor = function(color){
		this.Color = color;
	};
	
	robot.colorInfo = function(){
		console.log(color);
	}
	robot.setMod = function(mod){
		this.mod = mod;
	};
	
	return robot;
}
//****************
//Pattern End
//****************
//Called functions
//****************
var momCo = new robotFactory();
//Creates robot.
var bender = momCo.createRobot();
console.log(bender);

//Decorator functions from factory
bender.nameSet('Bender');
bender.toolSet('Bedning Arms');

//Display Info
bender.nameInfo();
bender.armsInfo();
bender.legsInfo();
bender.materialInfo();bender
bender.toolInfo();

//Different Decorator functions from different factory
modFactory(bender);
bender.setColor('Yellow');
bender.setMod('Jump increase');
console.log(bender);





