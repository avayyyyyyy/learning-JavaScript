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

let random = [5, 6, -5, -1];

// let final  = random.filter(number => number > 0);

// console.log(final.map(value => {value : number}));

let another = random.filter(number => number > 0).map((number) => {
  return { value: number };
});

console.log(another);
