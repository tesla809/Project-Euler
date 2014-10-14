/*
treehouse extra credit
Create a function that takes 3 arguments, a, b, and c. 
If a is an even number have the function return the string "even". 
Otherwise have the function return the string "odd"

question: wtf are the other arguements for then?*/

/* psuedo code:
step 1:
create a function with three arguements.

step 2: 
evaluate if 'a' is a even or odd
	use if (a % 2 === 0){
		console.log("'a' is even");
	}
		else (){
			console.log("'a' is odd"");
		}
wtf are the other arguments for then?
*/

var evenOdd = function (a,b,c) {
	if (a % 2 === 0){
		console.log("'a' is even");
	} else () {
		console.log("'a' is odd");
	} 
}

evenOdd(1,2,3);