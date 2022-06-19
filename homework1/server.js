const express = require('express');
const cors = require("cors");
const mysql = require('mysql2/promise');
const app = express();
const bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser.urlencoded({extended :false}));
app.use(bodyParser.json());


app.get("/from_user/:id",(req,res)=>{


})












app.listen(3000, ()=>{
    console.log(`SERVER START PORT =====> 3000`); 
})