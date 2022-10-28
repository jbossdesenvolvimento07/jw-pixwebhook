const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/webhook', (req, res) => {
    console.log("/webhook---------------------------------------------")
    console.log(req.body)
    res.sendStatus(200)
})

app.post('/webhook/pix', (req, res) => {
    console.log("/webhook/pix-----------------------------------------")
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });