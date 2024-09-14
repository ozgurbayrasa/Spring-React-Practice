// Let's use simplified for loop.

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (const tempSport of sports) {
    if(tempSport == 'Cricket'){
        console.log(tempSport + "<< My favorite")
    }
    else{
        console.log(tempSport)
    }
}