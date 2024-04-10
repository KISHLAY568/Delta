const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "mary",
    msg: "How was your day?",
    created_at: new Date(),
  },
  {
    from: "alice",
    to: "bob",
    msg: "What's the plan for tonight?",
    created_at: new Date(),
  },
  {
    from: "sam",
    to: "emma",
    msg: "Did you watch the new movie?",
    created_at: new Date(),
  },
  {
    from: "alex",
    to: "sara",
    msg: "Let's meet for coffee tomorrow!",
    created_at: new Date(),
  },
];


Chat.insertMany(allChats);

