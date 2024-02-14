let btns = document.querySelectorAll("button");

function sayHello() {
  alert("Hello");
}
function sayName(){
    alert("Kishlay Kumar");
}
for (btn of btns) {
//   btn.addEventListener("click",sayHello);
//   btn.addEventListener("click",sayName);
  btn.addEventListener("dblclick",function(){
    console.log("You double clicked me");
  })
}
