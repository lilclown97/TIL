const http = require('http');

let server = http.createServer((req, res) => {
  console.log(req.url);
  // res.end('<h1>Hello world!</h1>');
});

server.listen(3000);
