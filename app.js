const http = require('http'),
      fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.JPG');
    res.writeHead(200, {'Content-type': 'image/jpeg'});
    readStream.pipe(res);
}).listen('3000');