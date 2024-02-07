let isEven = n => {
    if (n % 2 === 0) {
        console.log("The Provide Number is Even");
    }
    else {
        console.log("The Provide Number is NOT Even");
    }
};

let num = prompt("Enter a Number");
isEven(num);