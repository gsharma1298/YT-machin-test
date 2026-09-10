
const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }

    console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Docker 3-Tier Application</h1>
        <p>Node.js application is running.</p>
    `);
});

app.get("/db", (req, res) => {

    db.query("SELECT NOW() AS time", (err, result) => {

        if (err) {
            return res.status(500).send("Database error");
        }

        res.json(result);
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Node application running on port 3000");
});


