const express = require('express');
const consign = require('consign');
const chain = require('middleware-chain')




const app = express();

consign().include('middleware').into(app)

chain([
    app.middleware.mongoUtil.init,
    app.middleware.mongoUtil.getCollection
])