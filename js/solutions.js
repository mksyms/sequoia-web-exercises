"use strict";

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

function isNegative(number) {

    return number < 0;

}






// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5


//Justin's Assessment GO-OVER
function average(arr) {
    var averageNum = 0;
    var arrayTotal = 0;

    arr.forEach(function (element) {

        arrayTotal += element;

    });

    averageNum = arrayTotal / arr.length;

    return averageNum;

}




// Write a function named `countOdds` that accepts an array of numbers and
// returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3


function countOdds(arr) {
    var numberOfOdds = 0;

    arr.forEach(function (element) {
        if (element % 2 !== 0) {
            numberOfOdds++;
        }
    });

    return numberOfOdds;
}




// Write a function named `convertNameToObject` that accepts a string that
// contains a first name and last name separated by a space character, and returns an
// object with properties `firstName` and `lastName`.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}











// Write a function named `fiveTo` that accepts a number and returns an array of
// the integers from 5 up to and including the passed number.
//
// fiveTo(5)   // [5]
// fiveTo(10)  // [5, 6, 7, 8, 9, 10]
// fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2]
// fiveTo(6)   // [5, 6]













// Write a function named `upperCaseLastNames` that accepts an array of objects
// where each object has properties `firstName` and `lastName` and returns the
// same array of objects with each last name capitalized
//
// var names = [
//     {firstName: 'Harry', lastName: 'Potter'},
//     {firstName: 'Ron', lastName: 'weasley'},
//     {firstName: 'Hermione', lastName: 'granger'}
// ];
//
// upperCaseLastNames(names);
// /*
// [
//    {firstName: 'Harry', lastName: 'Potter'},
//    {firstName: 'Ron', lastName: 'Weasley'},
//    {firstName: 'Hermione', lastName: 'Granger'}
// ]
//  */

