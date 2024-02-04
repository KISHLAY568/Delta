let max = prompt("Enter the max value");

let random = (Math.floor(Math.random() * max)) + 1;

let guess = prompt(`Guess the Number from 1 to ${max}`);

while (true) {
    if (guess === "quit") {
        console.log("Exiting the Game");
        break;
    } else if (guess == random) {
        console.log("You figured it out, good job! The number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("You need a higher guess to get it right, give it another try.");
    } else {
        guess = prompt("You need a lower guess to get it right, give it another try.");
    }
}