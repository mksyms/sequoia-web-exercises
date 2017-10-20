"use strict";



/*

var i = 1;

while (i < 65536) {
    i *= 2;
    console.log(i);
}
*/



/*
var number = 2;

do {
    console.log(number);
    //reassignment for number, assigning value from right hand to left hand variable
    number = number * 2;

} while(number <= 65536)
*/


//---------------------------------------------

                                //generates a random number 50 > num > 100
                                //allCones = amount of cones to sell
                                // (1 || 2 || 3 || 4 || 5) number of cones bought by each client
/*
Step 1) what is the starting state of things
        answer - we start with var allCones = Math.floor(Math.random() * 50) + 50;
               - ^ this is your starting inventory, you are finished when you sell all of it

Step 2) use a random number generator to get how many cones the next customer wants
        answer - var allCones = Math.floor(Math.random() * 50) + 50;

Step 3) Check to see if we have enough cones for that customer's order
        answer - IF SO -- sell the customer the number of cones they ordered and output to the console.
               - IF NOT -- say sorry, i don't have that many but I can sell you (number of remaining cones)

Step 4) Go to Step 2.
        ***LOOP ALERT - SIGNALED BECAUSE YOU'RE REPEATING***
           - build out code for previous steps before you create your loop
 */


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


var remainingConesAvailableForPurchase = allCones;

do {
    var random = Math.floor(Math.random() * 5) + 1;

    if (remainingConesAvailableForPurchase >= random) {
        remainingConesAvailableForPurchase -= random;
        console.log(random + " cones sold");

    } else {
        console.log("Cannot sell you " + random + " cones, I only have " + remainingConesAvailableForPurchase);
    }

} while(remainingConesAvailableForPurchase > 0);
    console.log("Yay! I sold them all");
