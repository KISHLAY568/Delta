let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector("button");

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "palegreen";
}

h1.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
