const express = require('express')
require('dotenv').config()

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

const port = process.env.APP_PORT || 8888

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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})