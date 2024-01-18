const server = http.createServer((req, res) => {

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/login':
            path += 'login.html';
            res.statusCode = 200;
            break;
        case '/signin':
            res.statusCode = 301;
            res.setHeader('Location', '/login');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})