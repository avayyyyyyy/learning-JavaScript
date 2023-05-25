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

// const number = (numbers) => {
//     return numbers**2;
// }

// console.log(number(3));

// REST Operators ==> By using this we can store the arguments in the form of array.

// function sum(num,...args) {
//     console.log(typeof args);
//     console.log(typeof num);
// }

// sum(1,2,3,4,5,6,7);

// Deafult Parameters ==>

// function sum(a = 0,b = 0){
// return a+b;
// }
// console.log(5);

// Getter & Setter Functions ==> The set method is used to set the value and the get method is used to get the value which we have setted.

// naam = {
//   pName: "Abhi",
//   aName: "Jain",

//   set fullName(value) {
//     let split = value.split(" ");
//     this.pName = split[0];
//     this.aName = split[1];
//   },
//   get fullName() {
//     return `${this.pName} ${this.aName}`;
//   },
// };

// naam.fullName = "Shubhankit Jain";

// console.log(naam.fullName);

// let a = [1,2,3,4,5];
// let total = 0;

// // for (let value of a){
// //    total += value;
// // }

// a.reduce() = a.forEach( value => total += value );

// console.log(total);

// let arr = [
//   {
//     price: 2,
//     name: "eggs",
//   },
//   {
//     price: 3,
//     name: "mayo",
//   },
// ];

//  let prices  = arr.map((value) => value.price*100);

//  console.log(prices);

// let numbers = [-1,2,3,5,-9,-7,-2];

// // console.log(numbers.filter((number) => { return number >= 0}).sort());

// let employees = [
//   { name: "Abhi", salary: 100 },
//   { name: "Komal", salary: 400 },
//   { name: "Somya", salary: 500 },
//   { name: "Yogendra", salary: 1000 },
// ];

// // let richEmploye = employees.filter(price => price.salary > 300 );
// // let employeName = employees.map((employe) => employe.name );

// // console.log(employeName);

// console.log(employees.forEach((naam) => console.log(`${naam.name} recived an reward!`)));

// FIND function using startsWith method ==> 

// let states = ["Alaska", "Florida", " Georgia", "California"];

// let startsWithC = states.find((state) => (state.startsWith("C")))
// console.log(startsWithC);

// let pets  = ["dogs", "cats", "birds"];
// console.log(pets.includes("dogs"));

// Sorting Algorithm ==> 

// Aescending Ordering

// let numbers = [1,2,3,4,5,6,9,5959,59,5,59,15,16,1,51];
// console.log(numbers.sort((a,b) => a - b ));

// Descending Ordering

// let numbers = [1,2,3,4,5,6,9,5959,59,5,59,15,16,1,51];
// console.log(numbers.sort((a,b) => b - a ));

