"use strict";


/*function showMultiplicationTable(num) {

    for (var i = 1; i <= 10; i += 1) {
    console.log(num + " x " + i + " = " + parseInt(num * i));
    }
}

showMultiplicationTable(7);*/


//---------------------------------------------------------

//Use a for loop and the code from the previous lessons
//to generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.

// For example:
// 123 is odd
// 80 is even
// 24 is even199 is odd
// ...

/*
start
end
process each time?
    generate random number between 20 and 200
    check if that number odd? console is odd  --- **IF = CONDITIONAL ALERT**
    else console is even
 */


for (var i = 1; i <= 10; i += 1) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}
/*
function cascade() {
    for (var i = 1; i < 10; i++) {
        var str = "";
        str = i.toString().repeat(i);
        console.log(str);
    }
}

function cascade2() {
    var str = "";
    for (var i = 1; i < 10; i++) {
        str += "1";
    }
    console.log(i*parseInt(str));
}*/
