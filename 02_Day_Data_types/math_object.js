const PI = Math.PI;
console.log(PI); // 3.141592653589793
console.log(Math.round(PI)); // 3; to round values to the nearest number
console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3; rounding down
console.log(Math.ceil(PI)); // 4; rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);
// Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); //10
//Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); //1.4142135623730951
// Power
console.log(Math.pow(3, 2)); // 9
console.log(Math.E); // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));
console.log(Math.cos(0));
console.log(Math.cos(60));

console.log(PI);
console.log(Math.min(-5, 4, 15, 22));

console.log(Math.floor(Math.random() * 11));

console.log(Math.abs(-10));

console.log(Math.sqrt(100));

console.log(Math.pow(3, 2));

console.log(Math.E);

let nums = [2, 5, -10, 20];

console.log(Math.max(...nums));

console.log(Math.min(...nums));

console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

let space = " "; // an empty space string
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

let fullName = firstName + space + lastName;
console.log(fullName);

let string = "30 Days Of JavaScript";

console.log(string.includes("Days")); // true
console.log(string.includes("days")); // false - it is case sensitive!
console.log(string.includes("Script")); // true
console.log(string.includes("script")); // false
console.log(string.includes("java")); // false
console.log(string.includes("Java")); // true

let country1 = "Finland";

console.log(country.includes("fin")); // false
console.log(country.includes("Fin")); // true
console.log(country.includes("land")); // true
console.log(country.includes("Land")); // false

let string1 = "   30 Days Of JavaScript   ";

console.log(string1);
console.log(string1.trim(" "));

let firstName1 = " Asabeneh ";

console.log(firstName1);
console.log(firstName1.trim());

let string2 = "30 Days Of JavaScript";
console.log(string2.replace("JavaScript", "Python")); // 30 Days Of Python

let country2 = "Finland";
console.log(country2.replace("Fin", "Noman")); // Nomanland

let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.toLowerCase);


let tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(tech.split(","));
console.log(tech.replace(", ", " - "));

let string3 = '30 Days Of JavaScript'

console.log(string3.charAt(15));

console.log(string3.charCodeAt('J'));


let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf);

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


