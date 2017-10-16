"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - is number even or odd
 * - add + 100 to number
 * - is number negative or positive
 *
 * when user enters NaN - use an alert to tell them input is NaN
 * AND do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var userConfirmsNumberEntry = confirm("Would you like to enter a number?");
//
// if (userConfirmsNumberEntry)  {
//     var confirmed = prompt("Please enter your number?");
// }
// console.log
//
//





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


/*
function analyzeColor(input) {
    var message = "";

    input = input.toLocaleLowerCase();

    if (input === "blue") {
        message = "blue is the color of the sky";

    } else if (input === "red") {
        message = "Strawberries are red";

    } else if (input === "blue") {
        message = "blue is the color of the sky";

    } else {
        message ="Your entry of " + input + " is not an approved color";
    }

    return message;
}

var userColorInput = prompt("Please enter a color");
analyzeColor(userColorInput);
*/



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/*function analyzeColor(randomColor) {
    var message;

    if (randomColor === "red") {
        message = "Strawberries are red";

    } else if (randomColor === "orange") {
        message = "orange you glad you picked orange";

    } else if (randomColor === "yellow") {
        message = "yellow is usually my cup status";

    } else if (randomColor === "green") {
        message = "green is the color of Po & Tito's cups"

    } else if (randomColor === "blue") {
        message = "blue is the color of the sky";

    } else if (randomColor === "indigo") {
        message = "indigo is the I in ROYGBIV";

    } else if (randomColor === "violet") {
        message = "violet is the color of a beautiful flower";
        //return "violet is the color of a beautiful flower";
        //console.log("violet is the color of a beautiful flower");

    } else {
        message = "SHUT UP";
    }

    return message;
}


console.log(randomColor);
console.log(analyzeColor(randomColor));*/

// //if you use return off of every case...
// console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/*function analyzeColor(input) {
    var message;

    switch (input) {

        case "red":
            message = "Strawberries are red";
            break;

        case "orange":
            message = "orange you glad you picked orange";
            break;

        case "yellow":
            message = "yellow is usually my cup status";
            break;

        case "green":
            message = "green is the color of Po & Tito's cups";
            break;

        case "blue":
            message = "blue is the color of the sky";
            break;

        case "indigo":
            message = "indigo is the I in ROYGBIV";
            break;

        case "violet":
            message = "violet is the color of a beautiful flower";
            break;

        default:
            message = "SHUT UP";
    }

    return message;
}


console.log(analyzeColor(randomColor));
console.log(randomColor);*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */


/*var userChoice = prompt("Please pick a color!");

alert(analyzeColor(userChoice));*/


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 // ^^^ INSTRUCTIONS GIVE US FUNCTION NAME, TELLS US PARAMETERS OF FUNCTION AND
 // WHAT THE FUNCTION DOES!
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// Write a function named `caculateTotal` that accepts a lucky number and total
// amount, and returns the discounted price.
    // ^^^ INSTRUCTIONS GIVE US FUNCTION NAME, TELLS US PARAMETERS OF FUNCTION AND
    // WHAT THE FUNCTION DOES!

//going to use switch case because discounted price will be different for each different lucky number


/*function calculateTotal(luckyNumber, total) {

    var discountPercentage, newDiscountedPrice;
    // have to declare your variables otherwise theyre red, combine variables in one line w/ a comma inberween


    switch (luckyNumber){
        case 0:
            discountPercentage = 0;
            break;

        case 1:
            discountPercentage = .1;
            break;

        case 2:
            discountPercentage = .25;
            break;

        case 3:
            discountPercentage = .35;
            break;

        case 4:
            discountPercentage = .5;
            break;

        case 5:
            discountPercentage = 1;
            break;

        default:
    }

    newDiscountedPrice = total - (total * discountPercentage);

    return newDiscountedPrice;


}

console.log(calculateTotal(4, 100));*/


///CONSOLIDATE FUNCTIONS FOR SWITCH CASE


function calculateTotal(luckyNumber, total) {

    var discountPercentage;
    var newDiscountedPrice;

    discountPercentage = calculatePercentage(luckyNumber);

    newDiscountedPrice = total - (total * discountPercentage);

    return newDiscountedPrice;


    function calculatePercentage(num) {
        switch (num) {
            case 0:
                discountPercentage = 0;
                break;

            case 1:
                discountPercentage = .1;
                break;

            case 2:
                discountPercentage = .25;
                break;

            case 3:
                discountPercentage = .35;
                break;

            case 4:
                discountPercentage = .5;
                break;

            case 5:
                discountPercentage = 1;
                break;

            default:
        }

    return newDiscountedPrice;


}

console.log(calculateTotal(4, 100));




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("Please enter your total bill.");


alert("Your lucky number is " + luckyNumber);
alert("Your total bill before the discount is: " + totalBill);
alert("Price after discount applied is: " + calculateTotal(luckyNumber, totalBill));