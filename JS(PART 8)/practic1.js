let nums = [10, 20, 30, 40];

let result = nums.every((n) => {
    return n % 10 === 0;
})

console.log(result);