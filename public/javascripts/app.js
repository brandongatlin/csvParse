$(document).ready(function() {

    $("#csv-file").change(handleFileSelect);

    function handleFileSelect(evt) {
        let csvFile = evt.target.files[0];
        parseData(csvFile, postData);
    }

    function postData(data) {
        $.post('/newFile', data);
    }

    function parseData(file, callBack) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            preview: 50,
            complete: function(results) {
                results.data.forEach(el => {
                    callBack(el)
                })
            }
        });
    }





}); // end doc dot ready