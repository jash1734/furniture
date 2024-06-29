const mongoose = require('mongoose');

const connectDatabase = async () => {
    const uri = "mongodb+srv://jash:jash1734@furniture.h7zkyqf.mongodb.net/?retryWrites=true&w=majority&appName=furniture";
    // const uri = "mongodb://localhost:27017/TestStudio";

    try {
        await mongoose.connect(uri);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = connectDatabase;
