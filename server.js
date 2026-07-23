require("dotenv").config();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser"); // <-- Added import
const app = express();
const testRouter = require('./routes/test.route');
const connectToDatabase = require("./connection/connection");

const Port = process.env.PORT || 5000; // <-- Defined Port variable

app.use(cors({
    origin: '*', // Added a wildcard or your frontend URL here
    methods: ['GET', 'DELETE', 'POST', 'PUT', 'OPTIONS'], 
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api', testRouter);

const startServer = async () => {
  try {
    const isConnected = await connectToDatabase();
    if (!isConnected) {
      console.log("database not connected");
    }
    console.log("database connected");
  } catch (error) {
    console.error(error);
  }
};

startServer(); // <-- Don't forget to call your start function!



module.exports = app;