const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://abdelrahmanamgad2210:<password>@caloriecounter.t6jww.mongodb.net/Product";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
