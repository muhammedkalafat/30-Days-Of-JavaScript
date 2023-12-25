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

console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046


let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstName + space + lastName;
console.log(fullName);

