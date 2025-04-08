const express = require("express");
const router = express.Router();
const { ObjectId } = require('mongodb');
const db = require("../mongo/connect.js")


const collection = db.collection("subscriptions")
//Create
router.post("/subscription", async (req, res) => {
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
router.get("/subscription", async (req, res) => {
  try {
    const data = await collection.find().toArray();
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

//Update
router.put("/subscription/:id", async (req, res) => {
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
router.delete("/subscription/:id", async (req, res) => {
  const id = req.params.id
  try {
    await collection.deleteOne({ _id: new ObjectId(id) })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

module.exports = router