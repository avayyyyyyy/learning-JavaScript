const box1 = document.querySelector(".box:nth-child(1)");
const box2 = document.querySelector(".box:nth-child(2)");
const box3 = document.querySelector(".box:nth-child(3)");
const box4 = document.querySelector(".box:nth-child(4)");
const body = document.querySelector("body"); // Get the first element from the collection

box1.addEventListener("click", () => {
  body.style.backgroundColor = "aquamarine";
//   console.log("hello");
});
box2.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
//   console.log("hello");
});
box3.addEventListener("click", () => {
  body.style.backgroundColor = "greenyellow";
//   console.log("hello");
});
box4.addEventListener("click", () => {
  body.style.backgroundColor = "burlywood";
//   console.log("hello");
});
