const express = require('express');
let router = express.Router()
let hosts = require('./../controllers/host-list')


router.get('/', async function(req, res){
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*')
    let hostList = await hosts.getList()
    res.send(hostList)
});

router.get('/user/host/:name', async (req, res)=>{
    console.log('adrara', req.params)
    res.send('arararar')
})

module.exports = router;