var createError = require('http-errors');
const chalkAnimation = require('chalk-animation')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

const db = require('./models');

var app = express();
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

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

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
    force: true,
    // force makes the db drop and recreate everytime you start the server
    logging: true

}).then(function() {
    app.listen(PORT, function() {
        console.log("--------------------------------------------------------------------------");
        console.log('N - e - w     D - a - t - a     N - e - w     D - a - t - a');
        console.log("--------------------------------------------------------------------------");
        chalkAnimation.rainbow("App listening on port " + PORT + "!");
    });
});

module.exports = app;