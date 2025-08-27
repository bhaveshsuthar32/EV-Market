const express = require('express');
const app = express();
const mongodb = require("./db/dbconnect");
const  router = require('./Routes/route');

mongodb();

app.use(express.json())

app.get("/checkServer", (req, res) => {
  res.send("hello world");
});

app.use("/admin", router); 

app.listen(4000, '0.0.0.0', () => {
  console.log('Server running on port 4000');
});
    