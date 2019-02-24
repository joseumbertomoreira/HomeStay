const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'HomeStay';

const client = new MongoClient(url, { useNewUrlParser: true });
let _db;

let init = async () =>{    
    try{
        await client.connect();
        console.log("Connected correctly to Mongo server");
        _db = client.db(dbName);
    }catch(err){
        console.log(err.stack);
    }
}

let getDb = async ()=> {
    return _db;
}

let getCollection = async ()=> {
    /*
    (async ()=>{
        try{            
            let col = await _db.collection('host')
            const hosts = await col.find({}).toArray();
            console.log('host', hosts)
            console.log("HOSTS", typeof(hosts))
            return hostsList;
        } catch(e){
            console.log("Erro!", e)
        }
    })()
    */
    try{            
        let col = await _db.collection('host')
        const hosts = await col.find({}).toArray();
        return hosts;
    } catch(e){
        console.log("Erro!", e)
    }
}

module.exports = {
    init,
    getDb,
    getCollection
}