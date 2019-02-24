const express = require('express');
const app = express();
const rout = require('./routers/routes')
const database = require('./utils/db');

(async ()=>{
    await database.init()
    app.use('/', rout)
    app.listen('3000', ()=>{
        console.log("Running on port 3000!");
    });
})()