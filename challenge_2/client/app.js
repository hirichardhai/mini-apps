app = {
    init: () => {
        // app.fetch();
        $('#submitButton').on('submit', (e) => {
            e.preventDefault();
            app.send($('#input').val())
            // console.log($('#input').val())
        })
    },
    send: (data) => {
        $.ajax({
            url: '/',
            type: 'POST',
            contentType: 'application/json',
            crossDomain: true,
            data: data,
            success: (returned) => {
                console.log('success, sent!');
                app.parseResponse(returned);
            },
            error: (data) => {
                console.error('failed to send');
            }
        })
    },
    parseResponse: (data) => {
            var arr = data.split('\n');
        arr.forEach((line) => {
            $('#convertedCSV').append(`<div>${line}</div>`);
        })
    }
}