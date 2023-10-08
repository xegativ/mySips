const express = require('express');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

// create connection
// - takes in configuration object; check documentation for param
const db = mysql.createConnection({
    //empty for now
    // will include either .env variables or AWS

});

db.connect((err) => {
    if(err){
        throw err;
    }
    else {
        console.log("MySQL connected.")
    }
})


// setup express server
const app = express();
app.listen('3000', () => {
    console.log("Server starting on port 3000");
});


// add user -> post 
// /adduser?username=myUsername&password=myHashedPassword
app.post('/adduser', (req, res) => {

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


// add user -> post 
// /adduser?username=myUsername&password=myHashedPassword
app.post('/getuser', (req, res) => {

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
app.get('/getuser/:user_id', (req, res) => {
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