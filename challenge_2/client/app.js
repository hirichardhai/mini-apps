app = {
    init: () => {
        // app.fetch();
        $('#submitButton').on('click', () => {
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
            data: JSON.stringify({data: data}),
            success: (data) => {
                console.log('success, sent!');
                $('#convertedCSV').append(JSON.stringify(data));
            },
            error: (data) => {
                console.error('failed to send');
            }
        })
    }
}