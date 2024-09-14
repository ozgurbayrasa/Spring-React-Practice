var found = true;
var grade = 88.6;
var firstName = 'Ozgur';
var lastName = "Bayrasa";
// Let's break it!
// found = 0; Reises an error, can't assign
// number to boolean variable.
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// Use template strings.
console.log("Hi ".concat(firstName, " ").concat(lastName));
