const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


app.listen(port, (err) => {
    if (err) {
        console.log("error")
    }else{
        console.log(`listining on the port: ${port}`)
    }
})