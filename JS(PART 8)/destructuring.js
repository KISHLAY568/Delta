let names = ["tony", "bruce", "peter", "natasha", "chris", "McMahon"];
let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others);

let info = {
    username: "xyz@gmail.com",
    password: "abcd",
    city: "Mumbai"
}

let { username, password } = info;
console.log(username);
console.log(password);
let { username: alpha, password: gamma, city: place = "Pune" } = info;
console.log(alpha);
console.log(gamma);
console.log(place);
