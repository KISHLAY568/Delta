let p = document.querySelector("p");
p.addEventListener("click", function () {
  console.log("Para was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
  console.log("I am inside box");
});
