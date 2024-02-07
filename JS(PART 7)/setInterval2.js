//This program prints Namaste Duniya 5 times and after that clearInterval will run and the program will terminate
let id = setInterval(() => {
    console.log("Namaste Duniya!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clearInterval ran");
}, 10000);