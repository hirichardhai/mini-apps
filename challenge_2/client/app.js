app = {
    server: '127.0.0.1:3000',

    init: () => {
        app.fetch();
        $('#submitButton').on('click', () => {
            app.fetch($('#input').val());
            console.log('clicked')
        })
    },
    fetch: () => {
        $.ajax({
            url: app.server,
            type: 'GET',
            success: (data) => {
                console.log('success')
                console.log(data);
            },
            error: (data) => {
                console.log('failed to fetch');
            }
        })
    },
    send: (data) => {
        $.ajax({
            url: app.server,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: (data) => {
                console.log('success, sent!');
            },
            error: (data) => {
                console.error('failed to send');
            }
        })
    }
}
