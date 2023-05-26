// const names =  ["Abhi","Somya","Komal","Bablu"];
// ARRAY ForEach

// names.forEach((name, i) => {console.log(name, i)});

// Use When
// You want to do something with each elementof the array.

// Don't use when
// You want to stop or break the loop when some condition is true
// you're working with async functions

// For Example ==>
// let sum  = 0 ;
// let numbers=[1,2,3,4,5,6];
// numbers.forEach((number)=>{ sum +=number });
// console.log(sum);
// function add (2,2){
//    let result = a+b;
// }
// console.log(result);

// Concatination of an array of numbers.

// let first  = [1,2,3];
// let second  =[4,5,6];

// let final = f,irst.concat(second);

// console.log(final);
// console.log(typeof final);

// OR by using "Spread" Operators ==> It is used to concat mutilple arrays.

// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let final = [...first, ...second];
// console.log(final);

// HOMEWORK ==>

// let first = [
//    {
//       name : "abhi"
//    }
// ]

// let swcond = [

//   {
//     name: "komal",
//   }
// ];

// let combined = first.concat(swcond);
// console.log(combined); //
// console.log(combined.slice(0, 1));

// let random =  [5,5,6,3,2,1,4,5,6,5,2];
// console.log(random.sort().reverse());

// FILTER Functions ==>

// let random =  [5,5,6,3,2,1,4,5,6,5,2];
// let final = random.filter( number => number <= 4 ); // Arrow function

// console.log(final.sort());

// MAP Function ==>

// let random =  [5,5,6,3,2,1,4,5,6,5,2];
// let final =  random.map((number)=>{
//       return number*100
// })

// console.log(final.sort());

// MAPING WITH OBJECTS

// let random = [5, 6, -5, -1];

// // let final  = random.filter(number => number > 0);

// // console.log(final.map(value => {value : number}));

// let another = random.filter(number => number > 0).map((number) => {
//   return { value: number };
// });

// console.log(another);

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

// let array = [1, 2, 3, 4, 5];
// Array Some ==>
// console.log(array.some((number) => number > 3)); // Tells that some numbers of this array is greater than 3 ( Atleast one ) ?

// Array Some ==>
// console.log(array.every((number) => number > 3)); // Tells that every numbers of this array is greater than 0 ( every number should be  )?

// Hardest method of array to understand
// Array reduce ==>

// let groceryList = [29, 12, 45, 35, 87, 110];
// let total = 0;

// // for (let values in groceryList) {
// //   total = total + values;

// groceryList.forEach((value) => (total += value));

// console.log(total);

// ==> Questions Arena 

// Q1. Sort by lowest to highest value
// ==>[20,40,10,30,10,50]
// ==>[5,10,0,-5]
// ==>[3,2,1,0]


// let arr1 = [20, 40, 10, 30,10,50];
// console.log(arr1.sort());

// let arr2 = [5, 10, 0, -5];
// console.log(arr2.sort());

// let arr3 = [3, 2, 1, 0];
// console.log(arr3.sort());

let sortLowToHigh = [
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
]

console.log(sortLowToHigh.sort((a,b) => a.price - b.price) );