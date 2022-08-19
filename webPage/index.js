const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/:home', (req, res) => {
    const {home} = req.params;
    const randomNum = Math.floor(Math.random() * 100) +1
    res.render('home', {url:home, randomNum})
})


app.listen(port, (err) => {
    if (err) {
        console.log("error")
    }else{
        console.log(`listining on the port: ${port}`)
    }
})