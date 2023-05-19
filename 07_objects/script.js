// // // // Object is nothing but an instance of variable or we can say a group of variables.

// // // // rectangle = {
// // // //   lenght: 2,
// // // //   breadth: 4,
// // // //   area() {
// // // //     console.log(this.lenght * this.breadth);
// // // //   },
// // // // };

// // // // console.log(rectangle.area());

// // // // rectangle.lenght = 5;
// // // // console.log(rectangle.area());
// // // // console.log(rectangle.lenght);
// // // // console.log(`Let's Start!`)

// // // // Creating a function which creates varoious rectangles.

// // // function createRectangle(lenght = 10, breadth = 5) {
// // //   return (rectangle = {
// // //     lenght,
// // //     breadth,
// // //     area: function () {
// // //       return this.lenght * this.breadth;
// // //     },
// // //   });
// // // }

// // // // Envoking that function which creates mutiple rectangles.

// // // let rectangle1 = createRectangle(50, 50);

// // // // Changing its Length and breadth of the rectangle.

// // // //==> rectangle1.lenght = 10;
// // // //==> rectangle1.breadth = 10;

// // // // Checking its new length and breadth of the rectangle.

// // // console.log(`lenght is ${rectangle1.lenght}`);
// // // console.log(`lenght is ${rectangle1.lenght}`);
// // // console.log(`breadth is ${rectangle1.breadth}`);

// // // // Printing the  area of the new rectangle.

// // // console.log(`Area is : ${rectangle1.area()}`);

// // // // Types of casing ==> Pascal Notation : first letter of every word is to be capital. ==>  "NumberOfStudents".
// // // // camelCase ==> first letter of every word is to be capital except the first one ==> "numberOfStudents".
// // // // "This" is a keyword which is used to refer the variable or property of current object.
// // // // This keyword is used to avoid the confusion between two same property objects.

// // // Dynamically Named Objcts ==> In this we can delete any property of an object / we can crete a new property of an object.
// // // First we Declare a new object.

// // ob = {
// //   a: 5,
// //   b: 7,
// // };

// // // Then printing its properties
// // console.log(ob);
// // // Then Deleting its one of the property.
// // delete ob.b;
// // // Then checking its properties weather it deleted or not.
// // console.log(ob);
// // // Adding a new property in the object.
// // ob.b = 5;
// // // Then checking its properties weather it added or not.
// // console.log(ob);

// // // Types of refrences in JavaScript

// // // when we talk in terms of pritive data types it creates an another block which conatains its data.

// // let a = 10;
// // let b = a;

// // a++;

// // console.log(a); // 11
// // console.log(b); // 10

// // // And when we talk in terms of non-pritive data types it doesn't creates an another block, it points thr data to the same address tyepe.

// // let a1 = { value: 10 };
// // let b1 = a1;

// // a1.value++;

// // console.log(a1.value); // 11
// // console.log(b1.value); // 11

// // // Note ==> primtive are copies by their value.
// // // Note ==> reference are copied by their address.
// // Primitives are : Number, String, Boolean, Undefined and null.
// // Non primitive are : Function, Ojects and arrays.

// // let a = {
// //   value:10
// // };

// // function inc (a){
// //    a.value++;
// // }

// // inc(a);
// // console.log(a.value);
// // // console.log(inc(a.value));

// // For-In-Loops In JavaScripts.

// let rectangle = {
//   length : 10,
//   breadth : 5,
// }

// for (key in rectangle){
//   // Key ==> are reflected through "key" variables.
//   // Values ==> are reflected through "Rectangle[Key]".
//   console.log(key,rectangle[key]);
// }

// // Object Cloning

// let src ={
//   a:10,
//   b:20,
//   c:30
// };

// let dest = {...src};
// src.a++;
// console.log(src.a);
// console.log(dest);




