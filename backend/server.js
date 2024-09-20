const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
require('dotenv').config()

// middleware
app.use(cors())
app.use(express.json())

// TODO
// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// define routes

app.get('/examples/random', (req, res) => {
    res.json(Math.ceil(Math.random() * 100))
})

// start server
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port}...`))

