/*
*
*
*
*/

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
		 
