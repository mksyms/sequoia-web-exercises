(function(){

   "use strict";


    /**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {

   return "Hello " + name + "!";
}
// console.log(sayHello("Mary"));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// var helloMessage = sayHello("Mary");
// console.log(helloMessage);


// sayHello("Mary"); calling the function, we already have it from problem  ^. passing "Mary" as a string literally
// stored sayHello("Mary") in variable -- var helloMessage = sayHello("Mary");



/**
 * TODO:
 * Store your name as a string in a variable named 'myName',
 * and pass that variable to the 'sayHello' function.
 * You should see the same output in the console.
 */

//not hard coding with var myName because youre OUTSIDE OF THE FUNCTION!!!
// you dont need to create a new function for sayHello(name) because you previously declared it

var myName = "Mary Kathryn";
console.log(sayHello(myName));

//call the function and then "passing" the assigned variable (nest variable inside paren)


// THIS IS A BIG NO NO!!!!!!


// -function sayHello(myName)
// var myName = "Mary Kathryn";
// AVOID THIS ---  var myName = "Mary Kathryn" -- INSIDE of a function
// that is hardcoding information
// assigning value to a variable, makes function not reusable
// function is a general formula that you can use to generate outputs with different info you assign your variables



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


function isTwo(number) {
   if (number === 2) {
      return true;
   } else {
      return false;
   }

}
console.log(isTwo(random));





/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant.
 *
 * The function should accept a tip percentage
 * and the total of the bill,
 *
 * and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */


function calculateTip(tipDecimal, totalBill) {
   return tipDecimal * totalBill;
}
// console.log(calculateTip(.2, 200);

//ORDER THAT YOU PASS IN ARGUMENT MATTERS
// NEED TO MATCH UP TO PARAMETERS RESPECTIVELY




/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


var totalBill = prompt ("What is the total bill?");
var tipPercentage = prompt ("What tip percentage will you use?");

alert("The amount to tip is: " + calculateTip(tipPercentage, totalBill));




//REMEMBER THAT THE ARGUMENTS - NEED TO MATCH UP TO PARAMETERS RESPECTIVELY




})();













