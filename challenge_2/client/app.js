app = {
    server: 127.0.0.1:3000,

    init: () => {
        app.fetch();
    },
    fetch: () => {
        $.ajax({
            url: app.server,
            contentType: ''
            data: 
        })
    },
    send: () => {
        $.ajax({
            url: app.server,
            contentType: 'application/JSON',
            data: JSON.stringify(data),
            
        })
    }
}