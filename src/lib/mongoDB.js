const { MongoClient, ServerApiVersion } = require('mongodb');

let db;

export const mongoDB = async ()=> {
    if(db) return db;
    try {
        const uri = process.env.NEXT_MONGODB_URL;
        const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
        });
        await client.connect();
        db = client.db('nutryvo')
        return db;
    } catch (error) {
        console.log(error);
    }
}