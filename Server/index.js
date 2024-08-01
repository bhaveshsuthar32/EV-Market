const express = require('express');
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send("welcome home page")
})

app.listen(port, 'localhost' , () => {
    console.log(`server started on http://localhost:${port}`);
})