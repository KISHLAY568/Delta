let button = document.createElement("button");

document.querySelector("body").append(button);

button.innerText = "click Me";

button.addEventListener("click", function () {
  this.style.backgroundColor = "palegreen";
});
