const { resolveSoa } = require('dns');

const http = require('http'),
      server = http.createServer((req, res) => {
        if (req === '/') {
            res.write('hello world from nodejs');
            res.end();
        } else {
            res.write('use some other domain');
            res.end();
        }
      });

server.listen('3000');