function longestCountryName(countryList){
    let max = countryList[0].length;
    let ans = countryList[0];
    for(let i=0;i<countryList.length;i++){
        if(countryList[i].length > max){
            max = countryList[i].length;
            ans = countryList[i];
        }
    }
    return ans;
}

let countryList = ["India","Germany","USA","UK"];

console.log(longestCountryName(countryList));