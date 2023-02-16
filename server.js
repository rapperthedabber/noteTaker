const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const util = require('util')
const fs = require('fs')
const routes = require("./routes/apiroutes.js")
//const notes = require('../../../db/db.json')


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))
app.use("/api" , (routes))
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
 app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})



app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})