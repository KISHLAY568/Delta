let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

if ((num1 % 10) == (num2 % 10)) {
    console.log("Both numbers are having the same last digit");
} else {
    console.log("Both numbers are not having the same last digit");
}