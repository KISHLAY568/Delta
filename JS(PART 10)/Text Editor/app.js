let input = document.querySelector("input");
let p = document.querySelector("p");

input.addEventListener("input", function () {
  console.log(input.value);
  p.innerText = input.value;
});
