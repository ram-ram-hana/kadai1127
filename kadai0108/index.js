const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
            const num = Math.random()
            res.setHeader('Access-Control-Allow-Origin')

            if(num < 0.5) {
                res.write('吉です')
            } else if(num < 0.8) {
                res.write('中吉です')
            } else if(num < 0.95) {
                res.write('大吉です')
            } else {
                res.write('凶です')
            }
        res.end()
})

server.listen(4000)
console.log("The server is listening...")