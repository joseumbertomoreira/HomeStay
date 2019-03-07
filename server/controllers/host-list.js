const database = require('./../utils/db');

let getList = async () =>{    
    let list =  await database.getCollection();
    return list;
}

let getHost = async (id) =>{
    let host = await database.oneHost(id)
    return host;
}

module.exports = {
    getList,
    getHost
}