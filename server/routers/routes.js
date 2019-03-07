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
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*')
    let id = req.params.name;
    let host = await hosts.getHost(id);
    res.send(host)
})

module.exports = router;