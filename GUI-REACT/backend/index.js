import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

//----------------------------------------------------
const dbConfig = {
    host: 'bkmxso2suopnpe64tmya-mysql.services.clever-cloud.com',
    user: 'usjalwxjyu4izuby',
    password: 'rGms6qkggzV3SOXuIx4Q',  
    database: 'bkmxso2suopnpe64tmya',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});
//-------------------------------------------------

// Signup Route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    connection.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(201).json({ message: "User registered successfully!", redirect: "/login" });
    });
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Both email and password are required" });
    }

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    connection.query(query, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }

        if (results.length > 0) {
            res.status(200).json({ message: "Login successful", user: results[0] });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
