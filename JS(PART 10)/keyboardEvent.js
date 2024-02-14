let input = document.querySelector("input");

input.addEventListener("keydown",function(event){
    console.log("code: ",event.code);
    console.log("key:",event.key);

    console.log("key was pressed");
})