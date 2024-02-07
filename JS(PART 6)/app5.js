function generateRandomNumber(start,end){
    let randomNumber = Math.floor((Math.random()*(end-start)) + start);
    console.log(randomNumber);
}

generateRandomNumber(20,25);