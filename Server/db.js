var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var dotenv = require('dotenv');
dotenv.config();

var { v4: uuidv4 } = require('uuid');

// create connection
// - takes in configuration object; check documentation for param
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database : process.env.DB 

});

db.connect((err) => {
    if(err){
        throw err;
    }
    else {
        console.log("MySQL connected.")
    }
})

// add user -> post 
// /adduser?username=myUsername&password=myHashedPassword
router.post('/adduser', (req, res) => {

    // assume password already hashed for now
    const { username, password } = req.query;

    // user_id
    const user_id = uuidv4();

    // if no username or password
    if (!username || !password) {
        res.status(400).json({ error: 'Username and password are required.' });
        return;
    }

    const sql = 'INSERT INTO users SET ?';
    const post = { user_id: user_id, username: username, password: password, userdata: null };

    // post to db
    db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.send('User created...');
        }
    });

})


// retrieve user by id 
router.get('/getuser/:user_id', (req, res) => {
    let sql = 'SELECT * FROM  users WHERE user_id = ${req.params.user_id}';
    let query = db.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        else {
            console.log(result);
            res.send('User fetched...')
        }
    })
})

module.exports = db;