const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// TODO
// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// define routes

app.get("/examples/random", (req, res) => {
  res.json(Math.ceil(Math.random() * 100)); // send back a random no. b/w 1-100
});

// POST route to add a user to the database
app.post("/database/users", async (req, res) => {
    const { username } = req.body; // Get the username from the request body
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
  
    try {
      const usersCollection = db.collection("users"); // Get the 'users' collection
      const result = await usersCollection.insertOne({ username }); // Insert username into the 'users' collection
      res.status(201).json({ message: "User added successfully", userId: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: "Error adding user" });
    }
  });

app.get("/database/users", (req, res) => {

})

// start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
