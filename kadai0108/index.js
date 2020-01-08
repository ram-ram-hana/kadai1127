const http = require('http');
const url = require('url')


const server = http.createServer((req, res) => {
     const parsedUrl = url/parsedUrl(req.url)
     console.log(req.url)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('hello');
    res.end();
    });
    server.listen(4000);
    console.log('Listening port 4000...');