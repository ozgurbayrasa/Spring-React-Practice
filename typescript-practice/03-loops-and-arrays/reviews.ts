let reviews: number[] = [5,5,4.5,1,3]

let total: number = 0

for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
}

let average = total/reviews.length;

console.log(`Average: ${average}`)