const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://adilsonojr:XJlyhARtB389Tl8d@cluster0.21rtiuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("hackathon");


module.exports = db