const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes")
const cors = require('cors');


const app = express();
const port = 3000;

//npm i cors
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(routes)



app.listen(port, () => {
  console.log(`Servidor rondando na porta ${port}`)
})