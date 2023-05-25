// console.log("Hello World!");

// Scope Variabes

// Global Variabes ==> global
// function scopes() {
//   let global = "ABHI JAIN";
// }
// console.log(global);

// Local Variables ==> a,b
// const add = (a, b) => a + b;
// const result = add(5, 10);
// console.log(result);
// console.log(a,b);

// function local(){
//     let naam = "Abhi"
//     console.log(naam);
// }
// console.log(naam);

// Scope is all depend upon the blocks scope ==> means the local variable can only be accessed through only in that particular block scope.

// Hoisting scope ==>  Hoisting is like defining a variable or somenthing but not providing any value to it.

// var age;
// console.log(age);
// age = 51;

// Hoisting doesnt works on function declreartion and calling!

// Closures ==> A closure in JavaScript is a function bundled together with its surrounding state (lexical environment), allowing the function to access and manipulate variables from its parent scope even after the parent function has finished executing.

function outerFunction() {
  var outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();

closure(); // Output: "I am outside!"
