const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

// Rest API's

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });

app.listen(5001, () => console.log("Server is listening on the port 5001"));