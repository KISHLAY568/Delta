let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

input.getAttribute("placeholder");
input.setAttribute("placeholder", "username");

button.setAttribute("id", "btn");

document.querySelector("#btn").style.backgroundColor = "blue";
document.querySelector("#btn").style.color = "white";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1");
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
