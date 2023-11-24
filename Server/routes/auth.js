var express = require("express");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var crypto = require("crypto");
var cors = require("cors");
var db = require("../db");

var { v4: uuidv4 } = require("uuid");

passport.use(
    new LocalStrategy(function verify(username, password, cb) {
        // configures local strat
        // for every user, get if username == [username]
        // db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {

        //     // check for error or incorrect username/pw (checks if no row returned)
        //     if (err) { return cb(err); }
        //     if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        //     // hash + salt password
        //     crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        //         if (err) { return cb(err); }
        //         // if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        //         // password already hashed when stored in db
        //         if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        //         return cb(null, false, { message: 'Incorrect username or password.' });
        //         }
        //         return cb(null, row);
        //   });
        // });

        db.query(
            "SELECT * FROM users WHERE username = ?",
            [username],
            (err, rows) => {
                if (err) {
                    return cb(err);
                }
                if (rows.length === 0) {
                    return cb(null, false, {
                        message: "Incorrect username or password.",
                    });
                }

                const row = rows[0]; // Assuming username is unique

                crypto.pbkdf2(
                    password,
                    row.salt,
                    310000,
                    32,
                    "sha256",
                    (err, hashedPassword) => {
                        if (err) {
                            return cb(err);
                        }

                        if (
                            !crypto.timingSafeEqual(
                                row.hashed_password,
                                hashedPassword
                            )
                        ) {
                            return cb(null, false, {
                                message: "Incorrect username or password.",
                            });
                        }

                        return cb(null, row);
                    }
                );
            }
        );
    })
);

// persist user information in login session
// process is global var; does not need to be required
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

var router = express.Router();

router.use(cors());

router.get("/login-page", (req, res, next) => {
    if (req.user) {
        res.redirect("/main");
    } else {
        res.render("login-page");
    }
});

// router.post(
//     "/login-page/submit",
//     passport.authenticate("local", {
//         successRedirect: "/main",
//         failureRedirect: "/login-page",
//     })
// );

router.post("/login-page/submit", (req, res, next) => {
    if (!req.user) {
        passport.authenticate("local", (err, user, info) => {
            if (err) return next(err);
            if (!user)
                return res
                    .status(401)
                    .json({ success: false, message: info.message });

            req.login(user, (err) => {
                if (err) return next(err);
                return res.status(200).json({ success: true, user });
            });
        })(req, res, next);
    } else {
        return res
            .status(401)
            .json({ success: false, message: "Account already logged in" });
    }
});

router.post("/logout-page", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/login-page");
    });
});

// router.get("/signup-page", function (req, res, next) {
//     res.render("register");
// });

router.get("/main", (req, res, next) => {
    res.render("main");
});

router.post("/signup-page", function (req, res, next) {
    var salt = crypto.randomBytes(16);

    crypto.pbkdf2(
        req.body.password,
        salt,
        310000,
        32,
        "sha256",
        function (err, hashedPassword) {
            if (err) {
                return next(err);
            }

            // user_id
            const user_id = uuidv4();

            // db.run('INSERT INTO users (user_id, username, hashed_password, salt, userdata) VALUES (?, ?, ?, ?, ?)', [
            //     user_id,
            //     req.body.username,
            //     hashedPassword,
            //     salt,
            //     null
            // ], function(err) {
            // if (err) { return next(err); }
            // var user = {
            //     user_id : user_id,
            //     username: req.body.username
            // };

            const sql = "INSERT INTO users SET ?";
            const post = {
                user_id: user_id,
                username: req.body.username,
                hashed_password: hashedPassword,
                salt: salt,
                userdata: null,
            };

            // post to db
            db.query(sql, post, (err, result) => {
                if (err) {
                    return next(err);
                } else {
                    console.log(result);
                    // res.send('User created...');
                    var user = {
                        id: this.lastID,
                        username: req.body.username,
                    };
                    req.login(user, function (err) {
                        if (err) {
                            return next(err);
                        }
                        // res.redirect("/main");
                    });
                }
            });
        }
    );
});

module.exports = router;
