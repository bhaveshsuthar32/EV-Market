const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./connection/dbcon');
const router = require('./Router/router');
const cors = require('cors');

mongodb();

app.use(cors(
    {
        origin: ["https://ev-market-iota.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))

app.use(express.json());

// app.use("/")
app.get("/", (req,res) => {
    res.send("welcome server side ev project")
})
app.use("/EV", router)


app.listen(port, 'localhost' , () => {
    console.log(`server started on http://localhost:${port}`);
})
