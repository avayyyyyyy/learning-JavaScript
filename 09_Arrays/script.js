// // END ==> push / pop
// // START ==> shift / unshift
// // MIDDLE ==> splice / slice

// // console.log("Hello World!");

// // let numbers = [1, 2, 3, 4, 5];

// // // console.log(numbers[0]);

// // // Insertin in the array from the end ==> array.push(9)
// // numbers.push(6);

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// // console.log("**************");

// // // POP ==> Refers to delete the last element from an array.
// // numbers.pop();

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// // console.log("**************");

// // // "unshift" ==> it helps to insert the element from the beggining of the array.
// // numbers.unshift(0);

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// // console.log("**************");

// // // Splice Function

// // numbers.splice(3);

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }
// // console.log("**************");

// // numbers.push(4, 5, 6);
// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// // console.log("**************");

// // console.log(numbers.slice(1,5)); // ==> Slice consists of two numbers --> First one represents the starting point and second represents the preciedence ending point value.

// // // for (let i = 0; i < numbers.length; i++) {
// // //   console.log(numbers[i]);
// // // }

// // Splice Function ==> It is used to enter the element between an array.
// // The First Number indicates the starting index and the second element indicates the ending element by which from the starting point to the ending point all the elements of the array is been deleted and then we can insert an new element into the array.

// words = ["Abhi", "Ayush", "Lucky"];
// console.log(words);

// words.splice(1, 0, "Harsh");
// console.log(words);

// /* [ 'Abhi', 'Ayush', 'Lucky' ]
//    [ 'Abhi', 'Harsh', 'Ayush', 'Lucky' ]  */


// number = [0,1,2,3,4,5];


// // number.splice(3,1);

// console.log(number);

// number.pop();
// console.log(number);
// number.shift();
// console.log(number);

// Emptying An Array
// number =  [1,2,3,4,5];

// let number2 = number;

// number = [];

// console.log(number); // []
// console.log(number2); // [ 1, 2, 3, 4, 5 ] 
// This means the array is not deleted yet.



// Perfect way of deleting an array is ==>

number = [1, 2, 3, 4, 5];

// let number2 = number;

// number.length = 0 ; // Best Practise

// console.log(number); // []
// console.log(number2); // []

// OR We Can Do This Tooo

// number.splice(0,number.length);

// console.log(number); // []
// console.log(number2); // []

// OR 

// while (number.length > 0){
//     number.pop();
//     console.log(number); // []
// }



// Concatination Of An Array.

