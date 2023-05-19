let input = 19;

// if (Codition) {
//   PrintsIf ==> True
// } else if (Codition){
//   Printe's this if the above is false
// } else{
//  Printe's this if all the above is False
// }

if (input >= 18) {
  console.log("You can Vote");
} else {
  console.log("You Can't Vote");
}

// Thruthy & Falsy Values
// Falsy VAlue ==> False, '', NaN, Null or undefined.
// Truthy VAlue ==> All Except the upper one's.

if (0) {
  console.log("Hii!"); //Prints Hii! ==> Because of truthy Value.
} else {
  console.log("Noo, Bye!");
}

//Switch Statement

let Test = 0;
switch (Test) {
  case 80:
    console.log("2nd Grade");
    break;
  case 60:
    console.log("3rd Grade");
    break;
  case 100:
    console.log("1st Grade");
    break;
  default:
    console.log("Enter A Default Value!");
}

//Ternary Operators

// Condition ? True : False;

1 ? console.log("True") : console.log("False");

//Another Example

const age = 18;

age < 18
  ? console.log("You Are A Teenager")
  : console.log("You Are Not A Teenager!");
