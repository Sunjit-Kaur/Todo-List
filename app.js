const express = require("express");
const mongoose = require("mongoose");
var db = require("./db.js");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb://localhost:27017/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Perform any necessary cleanup or graceful shutdown here
    process.exit(1); // Exit the application with a non-zero status code
  });

// server configurations....
app.listen(5000, () => console.log("Server started listening on port: 5000"));