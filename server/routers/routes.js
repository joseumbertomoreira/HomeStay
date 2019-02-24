const express = require('express');
let router = express.Router()
let hosts = require('./../controllers/host-list')


router.get('/', async function(req, res){
    
    console.log("LISTAO", await hosts.getList())
    res.send('Birds home page')
});

module.exports = router;