function sum(...args){
    return args.reduce((res,el)=>{
        return res + el;
    })

}

let finalAns = sum(1,2,3,4,5,6,7,8,9);
console.log(finalAns);