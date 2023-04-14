const express = require("express");
const http = require("http");
const server = http.createServer(app);
const app = express();

app.listen(5001, () => console.log("Server is listening on the port 5001"));
