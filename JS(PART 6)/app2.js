function uniqueElements(str) {
    let result = "";


    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (result.indexOf(currChar) == -1) {
            result += currChar
        }
    }
    return result;
}

let str = "abcdabcdefgggh";
console.log(uniqueElements(str));

