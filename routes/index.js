const db = require('../models')

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index', {
            title: 'CSV Uploader'
        });
    });

    app.post('/newFile', function(req, res, next) {
        db.Song.create({
                artistHotttnesss: req.body["artist.hotttnesss"],
                artistId: req.body["artist.id"],
                artistName: req.body["artist.name"],
                title: req.body["title"],
                year: req.body["year"]
            })
            //     .then(function (posted) {
            // })
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



// module.exports = router;