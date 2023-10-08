const express = require('express');
const mysql = require('mysql');

// create connection
// - takes in configuration object; check documentation for param
const db = mysql.createConnection({
    host : 'localhost',
    user : 'mySips-local',
    password : 'G010h(stY*]FlRB4',
    database : 'mysips-local'

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

app.get('/adduser1', (req, res) => {
    let post = {user_id: 1, username: "User 1", password: "hashed_password", userdata: null};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err){
            throw err;
        }
        else {
            console.log(result);
            res.send('User created...')
        }
    })
})

