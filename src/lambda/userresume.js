
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');

//mongo credentials
const MONGODB_USERNAME = process.env.MONGO_USER_NAME || "portfolio_user";
const MONGODB_SECRET = process.env.MONGO_PASSWORD || "OKb2T0Orz09oBeBa";
const MONGODB_DBNAME = process.env.MONGO_DB || "personal";
const MONGODB_COLLECTION = process.env.MONGO_DB_COLLECTION_RESUME || "resume";
const RESUME_ID = process.env.RESUME_ID || "res_1";
const MONGODB_CLUSTER = process.env.MONGO_CLUSTER || "cluster0";
const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_SECRET}@${MONGODB_CLUSTER}.ltnjg.mongodb.net/${MONGODB_DBNAME}?retryWrites=true&w=majority`;

//response headers
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

//find data
function getDataByID(client, id) {
    if (client) {
        return client.db(MONGODB_DBNAME).collection(MONGODB_COLLECTION)
            .findOne({ id: id })
    }
}

//connect to db
async function connectToDatabase(uri) {
    try {
        let client = new MongoClient(uri, { useUnifiedTopology: true });
        return client.connect();
    }
    catch (err) {
        return Promise.reject("Connecting error.");
    }
}



exports.handler = async function (event, context) {
    if (event.httpMethod && event.httpMethod === "GET") {
        context.callbackWaitsForEmptyEventLoop = false;
        let client;
        try {
            //connect to database
            client = await connectToDatabase(MONGODB_URI);
            if (client) {
                let data = await getDataByID(client, RESUME_ID);
                return {
                    statusCode: 200,
                    headers: headers,
                    body: JSON.stringify(data),
                }
            }
            else {
                throw new Error("Connection failed.");
            }
        }
        catch (err) {
            return {
                headers: headers,
                statusCode: 500,
                body: JSON.stringify({ "Error": err }),
            }
        }
        finally {
            if (client && client.close) {
                client.close();
            }
        }
    }
    else {
        return {
            statusCode: 405,
            headers: headers,
            body: JSON.stringify({ "Error": "Method not Allowed" }),
        }
    }
};