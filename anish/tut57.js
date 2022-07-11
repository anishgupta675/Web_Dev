const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Height, Width, borders and background</title>
      <style>
          #firstPara{
              background-color: red;
              height: 100px;
              width: 455px;
              border: 4px solid green;
              border-radius: 11px;
          }
          #secondPara{
              background-color: rgb(58, 243, 98);
              height: 100px;
              width: 455px;
              border-top: 2px solid rgb(231, 22, 231);
              border-right: 2px solid rgb(18, 10, 133);
              border-bottom: 2px solid rgba(9, 144, 27, 0.774);
              border-left: 2px solid rgb(156, 42, 13);
              border-top-left-radius: 4px;
              border-top-right-radius: 14px;
              border-bottom-left-radius: 8px;
              border-bottom-right-radius: 24px;
          }
  
          #thirdPara{
              height: 500px;
              width: 455px;
              background-image: url('https://codewithharry.com/static/common/img/photo.png');
              border: 2px solid red;
              background-repeat: no-repeat;
              background-position: bottom right;
          }
      </style>
  </head>
  <body>
      <h3>This is heading</h3>
      <p id="firstPara">This is a paragraph</p>
  
      <h3>This is second heading</h3>
      <p id="secondPara">This is a second paragraph</p>
  
      <h3>This is third heading</h3>
      <p id="thirdPara">This is a third paragraph</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});