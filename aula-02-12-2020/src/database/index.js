const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require("../models/users");
const Endereco = require("../models/enderecos");

const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);

User.associate(connection.models);
Endereco.associate(connection.models);

module.exports = connection;
