//get a value of par1 as a text and save it to myThing
var myThing = document.getElementById('par1').textContent;

//get a value of par2 as a text and save it to myThing2
var myThing2 = document.getElementById('par2').textContent;
//convert text value myThing2 to numeric value num (integer)
var num = parseInt(myThing2, 10)

var number1 = document.getElementById('num1').textContent;
var number2 = document.getElementById('num2').textContent;

//par1.innerHTML = myThing;
console.log(parseInt(number1, 10)*parseInt(number2, 10));