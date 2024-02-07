function largerArrayElements(arr,n){
    let result = [];
    let max = n;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            result.push(arr[i]);
        }
    }
    return result;
}


let arr = [8,9,10,1,2,3,4,5,6,7];

console.log(largerArrayElements(arr,5));