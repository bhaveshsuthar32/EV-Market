const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./connection/dbcon');
const router = require('./Router/router');
const cors = require('cors');

mongodb();

app.use(cors())

app.use(express.json());

app.use("/", router)


app.listen(port, 'localhost' , () => {
    console.log(`server started on http://localhost:${port}`);
})
