const express = require('express');
const app = express();
const pool  = require('./config/database');

const myModule = require('./model/my_module') (pool);

app.get('/from_user/:id', async function (req, res, next) {
    const data = await myModule.getUserId(req.params.id) 
    let additionalDate = await new Date().toISOString()
    res.json(
        { data,
            additionalDate}
           );
    next();
});


app.get('/from_student/:id', async function (req, res, next) {
    const data = await myModule.getStudentId(req.params.id) 
    let additionalDate = await new Date().toISOString()

 
    res.json(
    { data,
        additionalDate}
       );
    next();
});
app.listen(3000,()=>{
    console.log(`SERVER START PORT ====> 3000`);
});


