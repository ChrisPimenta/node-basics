const http = require('http')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/about':
            res.write('About');
            break;
        case '/':
        case '/home':
            res.write('Welcome to our homepage');
            break;
        default:
            res.write(`
                <h1>Oops</h1>
                <p>We cannot find the page</p>
                <a href='/home'>Back home</a>
            `);
            break;
    }

    // Ends the writing - not res.write could be called multiple times to keep appending 
    res.end();
})

server.listen(5000);