const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Set-Cookie','vulnerability=pollution; Domain=__proto__; Path=/notauth;');
  res.end('Hello, World!\n');
});

server.listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
