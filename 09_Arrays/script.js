console.log("Hello World!");

let numbers = [1, 2, 3, 4, 5];

// console.log(numbers[0]);

// Insertin in the array from the end ==> array.push(9)
numbers.push(6);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("**************");

// POP ==> Refers to delete the last element from an array.
numbers.pop();

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("**************");

// "unshift" ==> it helps to insert the element from the beggining of the array.
numbers.unshift(0);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


console.log("**************"); 

numbers.splice(3);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("**************"); 

numbers.push(4,5,6);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("**************"); 