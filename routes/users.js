var express = require('express');
// var router = express.Router();

module.exports = function(app) {
    /* GET users listing. */
    app.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    app.post('/newFile', function(req, res, next) {
        console.log("reqbody ", req.body)
    });
}



// module.exports = router;