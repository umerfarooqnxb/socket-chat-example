const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.listen(5001, () => console.log("Server is listening on the port 5001"));
