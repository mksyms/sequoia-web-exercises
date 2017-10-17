

var userNumberChoice;

do {
    userNumberChoice = prompt("Please enter an odd number between 1 and 50.");

        if (userNumberChoice % 2 === 0 || isNaN(userNumberChoice) || userNumberChoice > 50) {
            alert("Slow your roll, bro. You need to enter in an ODD number between 1 and 50");
            // console.log("Input of " + userNumberChoice + " did not meet parameters");

        } else {
            console.log("Number to skip is: " + parseInt(userNumberChoice));
            break;
        }

    } while (true);



/* use SECOND LOOP & CONTINUE STATEMENT to output all the odd numbers between 1 and 50 except for userNumberChoice */

for (var i = 1; i <= 50; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    if (parseInt(userNumberChoice) === i) {
        console.log("Yikes! Skipping number: " + i);

    } else {
        console.log("Here is an odd number: " + i);
    }
}
