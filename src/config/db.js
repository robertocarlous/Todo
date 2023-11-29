const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async() =>{
    try{

const uri = process.env.uri
await mongoose.connect(uri);

  console.log("Database connected!");
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;


