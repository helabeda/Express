const express = require('express')
const path=require('path')
const app = express()
const port = 5000
const workinghours=require('./workingTime/workingTime')
app.use(express.static(path.join(__dirname, "workingTime")));


app.use(workinghours)
app.use(express.static(path.join(__dirname, "view")));

app.get('/', (req, res) => res.sendFile("./view/index.html", {root:__dirname}))
app.get('/services', (req, res) => res.sendFile("./view/services.html", {root:__dirname}))
app.get('/contact', (req, res) => res.sendFile("./view/contact.html", {root:__dirname}))
app.use((req, res) => {
    res.status(400).sendFile("./view/notFound.html", {root:__dirname})
})
app.listen(port, () => console.log(`App listening on port port!`))