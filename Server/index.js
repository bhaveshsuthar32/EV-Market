const express = require('express');
const app = express();
const port = 4000;
const mongodb = require('./connection/dbcon');
const router = require('./Router/router');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');


mongodb();

 app.use(cors(
    {
        origin: ["https://ev-market-iota.vercel.app"]
   }
 ))

  // app.use(cors());

app.use(express.json());
app.use(errorHandler);

app.get("/checkServer", (req,res) => {
    res.send("welcome server side ev projet")
})
app.use("/", router)

app.listen(port, 'localhost' , () => {
    console.log(`server started on http://localhost:${port}`);
})
