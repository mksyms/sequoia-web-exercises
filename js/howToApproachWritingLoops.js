
//write code that outputs the numbers from 1 to 100 in JS
//what if we dont know how long it outputs - from 1 to n in JS
//if n changes, we have to be here manually to write every line

/*caveperson approach
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
...*/




/*
VALUES -- THEY REPRESENT THEMSELVES


__ Abstraction __
    - abstraction is finding the underlying pattern.

VARIABLES are an abstraction for values and data type
CONDITIONALS abstract out decisions
    - we want the code itself to make the decision
    - our job as humans is to figure out how to represent that decision

FUNCTIONS abstract a sequence of steps (process)
    - through FUNCTIONS we can NAME that process

    - example:

    function isPositive(input) {
        if(!isNan(parseFloat(input))) {
            return number > 0;
        }
    return false;
    }

LOOPS abstract reptition
    - what is repeated
    - how many times is that code repeated?

    - example:

    var n;
    do {
        n = prompt("Please input a number so we can count from 1 to that number");
    } while (isNaN(n));

    for(var i = 1; i <= n; i++) {
        console.log(i);
    }
           - if someone types in 5 for n- it returns "5" as a string for the value of n
             add parseFloat(prompt((...))) so
* */