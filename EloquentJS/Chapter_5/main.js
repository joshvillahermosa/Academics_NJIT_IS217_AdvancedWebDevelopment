/*
*Joshua John Villahermosa
*Chapter 6 - problems
*
*/
		 
//---6.1----

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], print);

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}

function countZeroes(array){
	function counter(total, element){
		return total + (element === 0 ? 1 : 0);
	}
	return reduce (counter, 0, array);
}

//Cannot find the "combine" function.

//---6.2---

function processParagraph(paragraph){
	var header = 0;
	while (paragraph.charAt(0) == "%"){
		paragraph = paragraph.slice(1);
		header++;
	}
	return {type: (header == 0 ? "p" : "h" + header), content: paragraph};
}

var paragraph = document.getElementById("Par");
document.getElementById("Output").innerHTML = processParagraph(paragraph);

