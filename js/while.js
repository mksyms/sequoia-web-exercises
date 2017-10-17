// var i = 1;
//
// while (i < 65536) {
//     i *= 2;
//     console.log(i);
// }



//---------------------------------------------

/*
                                //generates a random number 50 > num > 100
                                //allCones = amount of cones to sell
                                // (1 || 2 || 3 || 4 || 5) number of cones bought by each client

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
*/
