let found: boolean = true;
let grade: number = 88.6;
let firstName: string = 'Ozgur';
let lastName: string = "Bayrasa";

// Let's break it!
// found = 0; Reises an error, can't assign
// number to boolean variable.

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);


// Use template strings.
console.log(`Hi ${firstName} ${lastName}`)