$(document).ready(function() {

    $("#csv-file").change(handleFileSelect);


    function handleFileSelect(evt) {
        let csvFile = evt.target.files[0];
        parseData(csvFile, postData);
        $('#csv-file').val('')
    }

    function postData(songs) {
        $.ajax({
            type: "POST",
            url: '/newFile',
            data: JSON.stringify(songs),
            dataType: 'json',
            contentType: "application/json",
        });
        // $.post('/newFile', songs);

        console.log('songs in posted data', songs)
    }

    function parseData(file, callBack) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            preview: 5,
            complete: function(results) {
                callBack(results.data)
                    // results.data.forEach(el => {
                    //     callBack(el)
                    // })
            }
        });
    }





}); // end doc dot ready