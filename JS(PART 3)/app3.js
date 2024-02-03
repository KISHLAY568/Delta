let num = 287152;
let sum = 0;
while (num) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);

}

console.log(sum);