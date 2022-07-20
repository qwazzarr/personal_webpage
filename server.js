const express = require('express')
const app = express()


app.get('/', (req,res) => {
    console.log("Here") 
    res.json( { message : "Hi pidor"})})
app.listen(5050)
