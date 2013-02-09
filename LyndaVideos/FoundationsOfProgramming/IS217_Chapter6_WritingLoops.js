//****************************************************************************************
//Name: Joshua John Villahermosa
//Class/Project: RU-N NJIT IS217
//File:
//Date: 2/9/12
//Description: Chapter 6 -- Iteration -- Writing Loops
//****************************************************************************************

//---Variables

//---Functions

function WhileLoop (){
	var a = 1;
	while (a <= 10){
		alert (a);
		a++;
	}
}

function LoopTwo(){
	var Amount = 0;
	var i = 1;
	
	while (i <= 10){
		Amount += 100;
		i++;
	}
	alert (Amount);
}

function ForLoop (){
	var a = 0
	for(var i = 1; i <=10; i++){
		a += 10
	}
	
	alert(a);
}

//---Called Functions

//WhileLoop();
//LoopTwo();
ForLoop();
