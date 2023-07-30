process.env.DB = "mongodb://localhost:27017/todo_express";
var mongoose = require("mongoose");

var connectToMongo = mongoose.connect(process.env.DB).then(function() {
  console.log("Connected to Mongo");
}).catch(function() {
  console.log("Failed to connect");
});

module.exports = connectToMongo;