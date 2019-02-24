const database = require('./../utils/db');

let getList = async () =>{    
    let list =  await database.getCollection();
    return list;
}

module.exports = {
    getList
}