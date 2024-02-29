async function demo(){
    throw "404 page not found";
    return "hello";
}

demo()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})