const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} : ${req.method} : ${req.originalUrl}`)
  next()
})

let subscriptions = []

// Rota para obter todas as inscrições
app.get("/subscription", (req, res) => {
  res.json(subscriptions);
})

// Rota para criar uma nova inscrição
app.post("/subscription", (req, res) => {
  const { id, name, email, phone } = req.body;
  const newSubscription = { id, name, email, phone };

  subscriptions.push(newSubscription);

  res.status(201).json(subscriptions);
})

// Rota para atualizar uma inscrição existente
app.put("/subscription/:id", (req, res) => {
  const id = req.params.id
  const { name, email, phone } = req.body;

  const index = subscriptions.findIndex(subscription => subscription.id == id)
  if (index !== -1) {
    subscriptions[index] = { id, name, email, phone }
    res.json(subscriptions[index])
  } else {
    res.status(404).send("Inscrição não encontrada")
  }
})

// Rota para excluir uma inscrição existente
app.delete("/subscription/:id", (req, res) => {
  const id = req.params.id

  const index = subscriptions.findIndex(subscription => subscription.id == id)
  if (index !== -1) {
    subscriptions.splice(index, 1)
    res.sendStatus(204);
  } else {
    res.status(404).send("Inscrição não encontrada")
  }
})

app.listen(port, () => {
  console.log(`Servidor rondando na porta ${port}`)
})