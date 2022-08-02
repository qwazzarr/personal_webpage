const express = require('express')
const app = express()
const cors = require('cors')
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors());


var corsOptions = {
    origin: 'http://localhost:3000',

    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.get('/', (req,res) => {
    console.log("Here") 
    res.header("Access-Control-Allow-Origin", "*");
    res.json( { message : "Hi pidor"})});

app.post('/draw', cors(corsOptions),(req,res) => {
    //delete on prod?
    console.log("Gospodi nahui");
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.json({message: "Success",
            else:"hui",
            contents : req.body});
})
app.listen(5050)
