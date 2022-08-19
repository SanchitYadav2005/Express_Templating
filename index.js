const express = require("express");
const app = express();
const path = require('path')
const port = 3000;

// configuring ejs to the express app.
// app.set() is a method in express, you can do many more things with it.
// in express when you configure ejs to it. It automaticlly set the view property to a folder named view (you can change it.)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. Now we can run our server form where ever we want.

app.get('/', (req, res) => {
    //res.render method renders html or ejs page in response.
    res.render('home'); // we don't need to specify the extension name because it's already set the view engine to ejs.
})

// creating a route to get a rendom number every time the page refreshes. And using ejs to template it to random.ejs.

app.get('/rand', (req, res) => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    res.render('random', {randomNum}, (err) => {
        if(err){
            console.log("errror")
        }else{
            console.log("working")
        }
    })
})



app.listen(port, (err) => {
    if(err){
        console.log("error")
    }else{
        console.log(`listining on the port: ${port}`)
    }
})
