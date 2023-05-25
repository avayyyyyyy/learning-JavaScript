// // DRY ==> Do not repeat Yourself !

// console.log("Hello, world!");
// //Block Of Code ==> Perform A Specific Task

// //Deafult Functions

// // FUnction decleration (Decleraing a Function!)

// function square(num) {
//   return num ** 2;
// }

// console.log(square(3));

// //Decleraing a Function ==> Type 2

// // In his the function has no named assigned thats why it s known as "Anonymous Function".

// let sayHello = function () {
//   console.log("Hello");
// };

// sayHello();

// // Function Declaration or defining a function
// function multiply(a, b) {
//   console.log(a, b);
//   //   console.log(a * b);
//   return a * b;
// }
// Return Keyword can only be used one time in a function ==> return ends the function on that particular keywords.

// It is known as Calling / Invoking or executing a Function.
// multiply(5, 10);

// console.log(multiply(5, 10));

// Parameters : function(a,b);
// Arguments  : function(5,10);

// const sayHii = (nm) => {
//   console.log(`Hiii There, ${nm}`);
// };
// sayHii("Abhi");

// const sayName = (bol) => {
//   console.log(`Hii, I am ${bol}`);
// }
// sayName("Abhi");

// const add = (a, b) => {
//   return a + b; // A Function can only contain single "return" statement.
//   return a * b; // Unreachable code detcted here !
// };

// let result = add(5, 10);

// console.log(result);

// const square = (number) => number * number;

// const result = square(10);

// console.log(result);

// Paramenters - are usd when defining a function
// Argumets - Passed when making a function call

// const sayHii = (firstName,age) => `Hiii, ${firstName}, Your age is ${age}`;

// const final= sayHii("Abhi");

// console.log(final);

// Default Parameters = (name = abhi, age =19) ==> `Hiii, ${firstName}, Your age is ${age}`;

// listOfCourses = [
//     {
//         no:1,
//         name:"DSA",
//         duration : 3,
//     },
//     {
//         no: 2,
//         name: "WebDev",
//         duration : 4,
//     }
// ]

//  listOfCourses.find(function("DSA"){
//     if( listOfCourses.name == "DSA"){
//         console.log(listOfCourses.name === "DSA")
//     }
//  })

const number = (numbers) => {
    return numbers**2;
}

console.log(number(3));
