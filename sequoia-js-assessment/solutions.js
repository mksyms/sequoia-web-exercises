"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


/*
// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true - T
// isNegative(-5) // true - T
// isNegative(0) // false - F
// isNegative(6) // false - F

/!* write a function isNegative()
    number argument
    true or false boolean
    negative number = i < 0
 *!/


function isNegative(inputNumber) {
    return inputNumber < 0;
}
console.log(isNegative());


// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2 - T
// average([4, 6, 8, 10, 12]) // 8 - T
// average([1, 2]) // 1.5 - T

/!*
function average needs to accept an ARRAY as an argument e.g. ([1,2,3})
for (Intitalization, Condition, Increment) {
        //<body> containing that will be rendered
        }
.length = get the NUMBER of ELEMENTS in the array
(?)use Math.method to figure out the AVERAGE of the elements in the [array]

(?)determine WHICH AVERAGE:
    *MEAN* add up all the number and then divide by the number of numbers.
    - MEDIAN- value of middle element in the list of numbers.
    - MODE- number that is repeated most often

to find the MEAN:
add+ all [array] elements to get a subtotal
subtotal divided(/) by number of elements (from array.length)
*!/


// CURRICULUM EXAMPLE
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// for (var i = 0; i < shapes.length; i++) {
// console.log('The shape at index ' + i + ' is: ' + shapes[i]);


function average(arrayOfNumbers) {
    var inputTotal = 0;

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        inputTotal += arrayOfNumbers[i];
    }

    var finalAverageOfArrayElements = inputTotal / arrayOfNumbers.length;

    return finalAverageOfArrayElements;

}

console.log(average([1, 2, 3])); //2
console.log(average([4, 6, 8])); //6
console.log(average([1, 2])); //1.5
console.log(average([0, 0, 0,])); //0

/!*
** CONFIRMED THAT AVERAGE IS REFERRING TO THE MEAN: :)
you know youre using the mean
because there only 2 numbers in this example average([1, 2]) // 1.5 - T
 *!/



// Write a function named `countOdds` that accepts an array of numbers and
// returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3


/!*
function countOdds(){ needs to accept an array as an argument ([4, 6, 8, 10])
determine if NUMBER VALUE of ELEMENT is ODD
USE MODULUS % 2 ≠ 0
USE for (var i = 0, i % 2 !==0, i++) {
USE .forEAch
USE if/else
USE Return


(?) turnary operations
var initlaization = (argument run through condition T || F) ? IF T THEN RETURN ODD NUMBER : OR ELSE IF FALSE ("console log you will never see this")
EXAMPLE:
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';

console.log(access); // logs "Access granted"
 *!/



// array.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);
//
//
// callback = function to execute for each element, taking UP TO 3 arguments:
//     current_Value = The value of the current element being processed in the array.
//     index = The index of the current element being processed in the array.
//     array = The array that forEach() is being applied to.
//     thisArg Optional = Value to use as this (it's the REFERENCE OBJECT) when executing callback.
//
//
//      EVALUATING FOR +=
//
//
//     Assuming the following variables:
//     foo = 'foo'
// bar = 5
// baz = true
//
// // Number + Number -> addition
// bar += 2 // 7
//
// // Boolean + Number -> addition
// baz += 1 // 2
//
// // Boolean + Boolean -> addition
// baz += false // 1
//
// // Number + String -> concatenation
// bar += 'foo' // "5foo"
//
// // String + Boolean -> concatenation
// foo += false // "foofalse"
//
// // String + String -> concatenation
// foo += 'bar' // "foobar"

function countOdds(arrayOfNumbers) {


    var checkOddNumberStatus = 0;


    arrayOfNumbers.forEach(function (numberInput)) {


        checkOddNumberStatus += numberInput % 2 !==0 ? : 0;
    });

    return checkOddNumberStatus;
}
*/


// COME BACK!!!!!!!!!!!!
//
//
//
//
// NOT FINISHED!!!!!
//
//
//

// Write a function named `convertNameToObject` that accepts a string that
// contains a first name and last name separated by a space character, and returns an
// object with properties `firstName` and `lastName`.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

/*
function convertNameToObject that accepts a string
THIS STRING contains a firstName & lastName separated by a SPACE CHARAC(" ") EMOPTY STRING


        USE OBJECT LITERAL ***SEE CLASS NOTES/CIRRICULUM
        HAS the : , syntax and makes an object that creates some predefined properties AT THE SAME TIME!

        EXAMPLE
        var car = {
            make: "Toyota",
        model: "Camry"
    };

      USE str.SPLIT() to SEPARATE the STRING

      EXAMPLE
       var str = "How are you doing today?";
       var res = str.split(" ");
*/

function convertNameToObject(name) {
    var fullName = {name.split(" ");
    return {
    };
firstName: fullName[0],
    lastName: fullName[1]//NO COMMA!!! LIKE ARRAYS
};
}

// COME BACK!!!!!!!!!!!!
//
//
//
//
// NOT FINISHED!!!!!
//
//
//



// Write a function named `fiveTo` that accepts a number
// and returns an array of
// the integers from 5 up to and including the passed number.
//
// fiveTo(5)   // [5]
// fiveTo(10)  // [5, 6, 7, 8, 9, 10]
// fiveTo(-2)  // [5, 4, 3, 2, 1, 0, -1, -2]
// fiveTo(6)   // [5, 6]


function fiveTo(max) {
    var numbers = [];
    var isLessThenFive = max < 5;
    var increment = isLessThenFive
}




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


/* YAY!!! NESTED FUNCTIONS SUB STRING ARRAY TIME!!

combined string
parameter.v
FIND BOOKS LECTURE EAMPLE WITH AND NOTES DOCUMENT
var taskVariable = [];
.foreach
RETURN
 returns the
// same array of objects with each last name capitalized

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

// EXAMPLE
//SHAPES.forEach = PLURAL
// SHAPE in function(shape) USE SINGULAR VARIABLE!!!!!!


PUSH AND PULL BABY!!!!
push ( {
: . synathax
 */

function upperCaseLastNames (allNames){
    var newUpperCaseSurNames = [];

} allNames.forEach(function(name)) {

    newUpperCaseSurNames.push ({

        firstName: name.firstName,
        lastName: person.lastName[0].toUpperCase() + allNames.lastName.substring(1)})
    });
return newUpperCaseSurNames;
}





































