let btns = document.querySelectorAll("button");

function sayHello() {
  alert("Hello");
}

for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("You entered the button");
  };
}
