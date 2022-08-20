const express = require("express")
const app = express();
const port = 3000;
const infodata = require('./data.json')

app.set('view engine', 'ejs');



app.get('/:search', (req, res) => {
    const {search} = req.params;
    const data = infodata[search]
    res.render('cricket', {...data})
})

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log(`listining on the port: ${port}`)
    }
})