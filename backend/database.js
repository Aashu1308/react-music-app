import { MongoClient } from 'mongodb';

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);

async function userdata() {
    try {
        await client.connect();
        const dataset = await client.db('musicdb').collection('users').find().toArray();
        return JSON.stringify(dataset);
    } catch (error) {
        console.error("Error fetching user data:", error);
    } finally {
        await client.close();
    }
}

export { userdata };
