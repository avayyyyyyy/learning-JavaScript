// // console.log("Hello World!");

// // String are used to store text in it!..... It is a type of primitive datatype.

// const single = 'Hello World!'; // Both are same
// const double = "Hello World!"; // Both are same

// const backticks = `Hello World!`;

// console.log(single);
// console.log(double);
// console.log(backticks);
// console.log();
// console.log(typeof single)
// console.log(typeof double);
// console.log(typeof backticks);
// console.log();

// const single2 = "${2+2}"; // Both are same
// const double2 = "${2+2}"; // Both are same

// const backticks2 = `${2+2}`;

// console.log(single2);
// console.log(double2);
// console.log(backticks2);
// console.log();
// console.log(typeof single2);
// console.log(typeof double2);
// console.log(typeof backticks2);
// console.log();

// String Properties ==>

// Length Properties.

// let naam = "Abhi";

// console.log(naam.length);

// Index Properties.

// console.log(naam[0]);
// lastName = naam[naam.length - 1]; // Output ==> Get last letter of the "Naam"

// Change Case of a "String".
// console.log(naam.toUpperCase());
// console.log(naam.toLowerCase());
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());

// indexOf();

// let index = "Hii There is no one inside the room!";
// //  console.log(index.indexOf("no"));

// if (index.indexOf("Hii") < 0) {
//   console.log("Not Present");
// } else {
//   console.log("Present");
// }

// Include Function ==> Returns a Boolean value.

let para = "Hello There, Today we are learning about String functions.";

// let isPresent = (word) => {
//     if (para.includes(word) === true) {
//       console.log(word + " is Present inside the para.");
//     } else {
//       console.log(word + " is Not Present inside the para.");
//     }
// }

// isPresent("Present");

// Slice Function
// let exampleSring = "Abhi";
// console.group(exampleSring.slice(2, 4));
// console.group(exampleSring.slice(0));

// Split Function

let word = "He Is A SuperHero!";
console.log(word.split("")); // ==> Divides the string in a single letters array = ["a", "b", "c", "d]
console.log(word.split(" ")); // ==> Divides the string in a single word array = ["Abhi","is","a","GoodBoy"]
