app = {
    server: 127.0.0.1:3000,

    init: () => {
        app.fetch();
    },
    fetch: () => {
        $.ajax({
            url: app.server,
            type: 'GET',
            contentType: '',
            success: 
        })
    },
    send: () => {
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