const express = require('express')
const path=require('path')
const app = express()
const port = 5000
const workinghours=require('./workingTime/workingTime')

app.use(workinghours)
app.use(express.static(path.join(__dirname, "workingTime")));

app.get('/', (req, res) => res.sendfile("./view/index.html", {root:__dirname}))
app.get('/services', (req, res) => res.sendfile("./view/services.html", {root:__dirname}))
app.get('/contact', (req, res) => res.sendfile("./view/contact.html", {root:__dirname}))
app.use((req, res) => {
    res.status(400).sendfile("./view/notFound.html", {root:__dirname})
})
app.listen(port, () => console.log(`App listening on port port!`))