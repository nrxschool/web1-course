const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

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
const collection = db.collection("subscriptions")

//Create
app.post("/subscription", async (req, res) => {
  const { name, email, phone } = req.body;

  const newSubscription = { name, email, phone }
  try {
    const data = await collection.insertOne(newSubscription);
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

//Read
app.get("/subscription", async (req, res) => {
  try {
    const data = await collection.find().toArray();
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

//Update
app.put("/subscription/:id", async (req, res) => {
  const id = req.params.id
  const { name, email, phone } = req.body;
  try {
    const data = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { name, email, phone } },
      { returnOriginal: false }
    )
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

//Delete
app.delete("/subscription/:id", async (req, res) => {
  const id = req.params.id
  try {
    await collection.deleteOne({ _id: new ObjectId(id) })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})


app.listen(port, () => {
  console.log(`Servidor rondando na porta ${port}`)
})