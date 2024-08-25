const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environment variables
const port = process.env.PORT || 5000;

// Middleware

const app = express();
app.use(cors());
app.use(express.json()); // This line ensures JSON bodies are parsed

// MongoDB connection
const uri = 'mongodb+srv://padamyos:bT64LZE2DOmsxSHr@cluster0.225dn.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// api
const User = require('./models/User');

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// app.post('/users/add', async (req, res) => {
//     const { name, email, password } = req.body;
//     const newUser = new User({ name, email, password });

//     try {
//         await newUser.save();
//         res.json('User added!');
//     } catch (err) {
//         res.status(400).json('Error: ' + err);
//     }
// });


app.post('/users/add', async (req, res) => {
    const { email, password } = req.body;

    // Additional validation if needed
    if (!email || !password) {
        return res.status(400).json('Email and password are required.');
    }

    const newUser = new User({ email, password });

    try {
        await newUser.save();
        res.json('User logged in successfully');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

