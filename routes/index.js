const db = require('../models')

module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.render('index', {
            title: 'CSV Uploader'
        });
    });

    app.post('/newFile', function(req, res, next) {

        let arrayOfSongs = req.body;

        // console.log("arrayOfSongs", arrayOfSongs)

        arrayOfSongs.forEach(row => {
                console.log('row', row)
                db.Song.create({
                    artistHotttnesss: row["artist.hotttnesss"],
                    artistId: row["artist.id"],
                    artistName: row["artist.name"],
                    title: row["title"],
                    year: row["year"]
                })
            })
            .then(function(posted) {
                console.log("posted", posted)
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



// module.exports = router;