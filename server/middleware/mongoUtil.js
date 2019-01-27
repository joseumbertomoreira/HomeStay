const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';
const dbName = 'HomeStay';

module.exports = () => {

    const mongodb = {};

    mongodb.init = async (context, next)=> {
        try{
            const client = new MongoClient(url, { useNewUrlParser: true });
            let connection = await client.connect();
            console.log("Connected correctly to server");
            const db = connection.db(dbName);
            context.collection = db.collection('host');
            return next();
        }catch(err){
            console.log(err.stack);
        }
    },
    mongodb.getCollection = async (context, next) => {
        const arrayCollection = await context.collection.find().toArray();
        console.log('coll', arrayCollection);
    }
    return mongodb;

}