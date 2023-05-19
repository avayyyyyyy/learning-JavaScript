let a = 10;
let b = 20;
let result;

console.log(a, b);

// Addition
console.log("Addition : ", a + b);

// Subtraction
console.log("Subtraction : ", a - b);

// Multiplication
console.log("Multiplication : ", a * b);

// Division
console.log("Division : ", a / b);

// Modulo
console.log("Modulo : ", a % b);

console.log("******** Increment ***********");

// Increment
console.log("Increment of a : ", ++a);
console.log("Increment of b : ", ++b);

console.log("******** Decreament ***********");

// Decreament
console.log("Decreament of a : ", --a);
console.log("Decreament of b : ", --b);

console.log("******** To The Power ************");

console.log("2**2");
console.log(2 ** 2);

// Comparison Operators ==> true/false
console.log("Is A Greater Than B?");
console.log(a > b);

console.log("Is A Greater Than Or Equal To B?");
console.log(a >= b);

console.log("Is B Greater Than Or Equal To A?");
console.log(a < b);

//The Good Ones "=== && !==="
//The Evil Ones "== && !=="

//IsEqual TO
console.log("a == b");
console.log(a == b);

//ItChecksItsDataTypeToo / StrictEquaity
console.log("10 === 10");
console.log(10 === 10);

//isNotEqualsTo
console.log("isNotEqualsTo");
console.log(a != b);

//LooseEqualityCheck
console.log(5 == "5");

//StrictEqualityCheck
console.log(5 === "5");

console.log("" == "0"); // False
console.log(0 == ""); // True
console.log(0 == "0"); // True
console.log(false == "false"); // False
console.log(true == 1); // True
console.log(true === 1); // False

// Logical Operators

// AND ==> &&
console.log(false && true); // All Operands are True ==> True

// OR ==> ||
console.log(true || false); // Anyone is to be True ==> True

// NOT ==> !
console.log("false ! false"); // Reverse The Boolean Value

// Assignment Operators ==> Numbers

let num = 5;
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);

// Assignment Operators ==> Strings

let para1 = 'Hii, I Am';
para1 += ' Shub0hankit Jain';
console.log(para1);
