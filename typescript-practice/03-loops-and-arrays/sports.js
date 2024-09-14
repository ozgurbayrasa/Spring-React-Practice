// Let's use simplified for loop.
var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == 'Cricket') {
        console.log(tempSport + "<< My favorite");
    }
    else {
        console.log(tempSport);
    }
}
