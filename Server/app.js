var createError = require('http-errors');
var passport = require('passport');
var session = require('express-session');
var express = require('express');
var authRouter = require('./routes/auth');
var path = require('path');
var dotenv = require('dotenv');
dotenv.config();

const mysqlStore = require('express-mysql-session')(session);

// setup express server
var app = express();
app.listen('3000', () => {
    console.log("Server starting on port 3000");
});

// define template (view engine)
// setting the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// parsing body json
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init passport
app.use(passport.initialize());

// serves all files within public to be accessible via URL
const options ={
    connectionLimit: 10,
    createDatabaseTable: true,

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    database : process.env.DB 
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'temp-sess',
  resave: false,
  saveUninitialized: false,
  store: new mysqlStore(options),
//   store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
// uses the strategy defined in auth.js
app.use(passport.authenticate('session'));

// must occur after other middleware init
// setup middleware 
// runs everytime regardless of URL 
app.use('/', authRouter)


// error handling and extra
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;





