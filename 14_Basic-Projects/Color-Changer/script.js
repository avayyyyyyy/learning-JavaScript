const box1 = document.querySelector(".box:nth-child(1)");
const box2 = document.querySelector(".box:nth-child(2)");
const box3 = document.querySelector(".box:nth-child(3)");
const box4 = document.querySelector(".box:nth-child(4)");
const body = document.querySelector("body"); // Get the first element from the collection
const boxes = document.querySelectorAll(".box"); // Get the first element from the collection

boxes.forEach((box) => {
  console.log(boxes);
  box.addEventListener("click", (e) => {
    if (e.target.id == "b1") {
      body.style.backgroundColor = "aquamarine";
    } else if (e.target.id == "b2") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id == "b3") {
      body.style.backgroundColor = "greenyellow";
    } else if (e.target.id == "b4") {
      body.style.backgroundColor = "burlywood";
    } else return;
  });
});