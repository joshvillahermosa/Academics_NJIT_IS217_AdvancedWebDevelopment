/*
*Joshua John Villahermosa
*IS217 Advance Web Development
*Exam 1
*/


//DISREGARD FOR EXAM
//SlideShow		 
function Slider(){
	$(".Slider #1").show("fade", 500); //Loads image
	$(".Slider #1").delay(5500).hide("slide", {direction: 'left'}, 500); //Keeps in 'delay' then slides out by 'hide'
	//NOTE: The time units are in miliseconds so 5 seconds = 5000 miliseconds (1 second = 1000 miliseconds)
	
	//Variables for sliding images
	var SliderIMGCount = $(".Slider img").size();
	var ImageCount = 2;
	
	//Sets of the sliding images after image 1
	setInterval(function (){
		$(".Slider #"+ImageCount).show("slide", {direction: 'right'}, 500);
	 	$(".Slider #"+ImageCount).delay(5000).hide("slide", {direction: 'left'}, 500);
	 	
	 	//Creates the Loop
	 	if (ImageCount == SliderIMGCount){
	 			ImageCount = 1;
	 		}
	 		else{
	 			ImageCount = ImageCount + 1;
	 		}
	 	}, 6000);// <-- This is the total of all the time units in the function above.
	}
//FINAL NOTE: MAKE SURE THERE ARE NOT TYPOS!!!! IT WLL NOT WORK IF THERE IS ONE TINY MISTAKE		 
		 
//14 - Singleton pattern

function singleton(){}

singleton.prototype.createObject = function(object){
	var list = [];
	
	for (var i = 0; i < list.lenght(); i++){
		if (list [i] === object){
			return 'Object created already';
		}else{
			object = function(){
				this.price = 'Apple is 2 cents';
			}
			list.push(object);
		}
		return new object;
	}
};

//15 - Factory pattern

function factory(){}
factory.prototype.createObject = function(){
	var object = function(){
		this.say = 'Object'
	}
	
	return new object;
};

//16 Prototype pattern

	var object = object.create();

//17 Constrcutor pattern
var object = function(){
	this.property = 1;
	this.property2 = 2;
	this.name = 'name';
};

//18 Decorator pattern
function decorate(){}
decorate.prototype.add(object) = function(){
	object = function(){
		this.flavor = 'mocha';
	}
	return object;
};



