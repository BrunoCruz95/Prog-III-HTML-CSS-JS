const express = require('express');
const routes = require("./routes.js");
require('./database');

const app = express();

app.use(express.json());
app.use(routes);




// SEMPRE A ÚLTIMA
app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});