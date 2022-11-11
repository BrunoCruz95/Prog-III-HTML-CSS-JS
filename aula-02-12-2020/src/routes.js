const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserControlers");
const EnderecoController = require("./controllers/EnderecoControlers");

routes.get('/', (req, res) => {
    res.send("Olá Galera");
})

routes.post('/users', UserController.InserirUsuario);
routes.get('/users', UserController.ListarUsuarios);

routes.get('/users/:id', UserController.GetUsuarioId);

routes.post('/enderecos/:user_id', EnderecoController.adicionarEndereco);
routes.get('/enderecos/:user_id', EnderecoController.buscarEndereco);

module.exports = routes;