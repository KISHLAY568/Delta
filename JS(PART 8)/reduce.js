let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let finalValue = num.reduce((res, el) => {
    return res + el;
})
console.log(finalValue);