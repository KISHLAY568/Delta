let todo = [];
let req = prompt("Enter what you want to do.");

while (true) {
    if (req === "quit") {
        console.log("closing the app");
        break;
    }
    else if (req === "list") {
        console.log("--------------------------");
        for (let i = 1; i <= todo.length; i++) {
            console.log(i, todo[i - 1]);
        }
        console.log("--------------------------");
    } else if (req === "add") {
        let add = prompt("Enter what you want to Add");
        todo.push(add);
        console.log("Task successfully added");
    } else if (req === "delete") {
        let idx = prompt("Enter the task index you want to delete");
        todo.splice(idx - 1, 1);
        console.log("Task successfully deleted");
    } else {
        console.log("Enter a valid command");
    }
    req = prompt("Enter what you want to do.");

}