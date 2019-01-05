const db = require('../models')

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.send('respond with a resource');
    });

    app.post('/newFile', function(req, res, next) {
        // console.log("req.body ", req.body)
        db.Song.create({
            artistHotttnesss: req.body["artist.hotttnesss"],
            artistId: req.body["artist.id"],
            artistName: req.body["artist.name"],
            title: req.body["title"],
            year: req.body["year"]
        }).then(function(posted) {
            // console.log(posted)
        })
    });

    app.get('/all', function(req, res) {
        db.Song.findAll().then(function(allSongs) {
            console.log(allSongs)
            let hbsObj = {
                entry: allSongs
            }
            res.render('index', hbsObj)
        })
    })
}