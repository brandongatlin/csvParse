$(document).ready(function() {

    $("#csv-file").change(handleFileSelect);

    function doStuff(data) {
        //Data is usable here
        console.log("data 1", data);
        $.post('/newFile', data, function(req, res) {
            // console.log('data back on front end ', data)
        });
    }

    function parseData(file, callBack) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                callBack(results.data[0]);
            }
        });
    }

    function handleFileSelect(evt) {
        var file = evt.target.files[0];
        parseData(file, doStuff);
    }

    // function parseFile(file, cb) {
    //     console.log('parse file called')
    //     Papa.parse(file, {
    //         header: false,
    //         dynamicTyping: true,
    //         download: true,
    //         complete: function(results) {
    //             console.log(results.data)

    //             setTimeout(() => {
    //                 console.log(results[0].ISSN)
    //             }, 3000);

    //             cb(results.data)
    //         }
    //     })
    // }

    // function postData(results) { // my callback
    //     console.log('post data cb called')
    //     $.post('/newFile', results, function(req, res) {
    //         console.log('data back on front end ', results)
    //     });
    // }


    // function handleFileSelect(evt) {
    //     // var file = evt.target.files[0];
    //     var file = 'https://www.papaparse.com/resources/files/normal.csv'
    //     parseFile(file, postData);
    // }

});