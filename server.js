const https = require('https');
const fs = require('fs');
const path = require('path');

const cert_key = `\\\\192.168.1.8\\disk2\\pki\\192.168.1.254-key.pem`
const cert_crt = `\\\\192.168.1.8\\disk2\\pki\\192.168.1.254.pem`

const options = {
  key: fs.readFileSync(cert_key),
  cert: fs.readFileSync(cert_crt),
};

const server = https.createServer(options, (req, res) => {
  const filePath = path.join(__dirname, req.url);
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  if (extname === '.js') {
    contentType = 'text/javascript';
  } else if (extname === '.css') {
    contentType = 'text/css';
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(45423, () => {
  console.log('Server is running on https://localhost:45423');
});