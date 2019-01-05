var express = require('express');
const db = require('../models')
    // var router = express.Router();

module.exports = function(app) {
    /* GET users listing. */
    app.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    app.post('/newFile', function(req, res, next) {
        // console.log("reqbody ", req.body);
        db.Song.create(req.body).then(function(posted) {
            console.log(posted)
        })

    });
}



// module.exports = router;