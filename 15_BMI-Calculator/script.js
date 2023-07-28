const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  button.innerHTML = `${(
    parseInt(weight.value) / parseInt(height.value * height.value)*10000).toFixed(2)
  }`;
});
