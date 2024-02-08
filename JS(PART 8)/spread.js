let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...arr);
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(..."Kishlay Kumar");

let newArr = [...arr];
console.log(newArr);
let char = [..."hello"];
console.log(char);
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];
let whole = [...odd, ...even];
console.log(whole);

let data={
    email:"wolverine@hotmail.com",
    pass:"1234"
}
let newData1 = {...data};
let newData2 = {...data,id:102};
console.log(newData1);
console.log(newData2);

let objArr  ={...arr};
console.log(objArr);
console.log({..."hello"});

