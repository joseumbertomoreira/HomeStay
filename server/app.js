const express = require('express');
const consign = require('consign');
const chain = require('middleware-chain')




const app = express();

consign()
    .include('middleware')
    .then('controllers')
    .into(app)

chain([
    app.middleware.mongoUtil.init,
    app.middleware.mongoUtil.getCollection,
    app.controllers.hostList.list
])

app.listen('3000', ()=>{
    console.log('The server is listen on port 3000!')
})