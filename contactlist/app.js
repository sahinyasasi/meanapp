//importing modules
const express = require("express");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");
let cors = require("cors");
let path = require("path");

let app = express();
const route = require("./routes/route");

//port
const port = 3000;

//using middleware
app.use(cors());

//body-parser

app.use(bodyparser.json());
//static files
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api", route);

//testing server
app.get("/", (req, res) => {
  res.send("foobar");
});

app.listen(port, () => {
  console.log("server started at:" + port);
});
