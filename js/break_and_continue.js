var userNumberChoice = prompt("Please enter an odd number between 1 and 50.");

do {
    console.log("User's number choice did not meet parameters");
    alert("Slow your roll, bro. You need to enter in an ODD number between 1 and 50");
} while (userNumberChoice % 2 === 0 || NaN || userNumberChoice > 50);


for (var i = 1; i <= 50; i += 1) {

    console.log("Number to skip is: " + parseInt(userNumberChoice));

    if (i === userNumberChoice) {
        console.log("Yikes! Skipping number: " + parseInt(userNumberChoice));
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + parseInt(userNumberChoice));
    }
}


