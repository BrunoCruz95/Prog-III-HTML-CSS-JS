// Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const adm = require("./rotas/adm")
    const path = require("path")
    //const mongoose = require("mongoose")

// Configurações
    // BODY-PARSER
        app.use(bodyParser.urlencoded({extended: true}))
        app.set(bodyParser.json())
    // HANDLEBARS
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('views engine', 'handlebars');
    // MONGOOSE
        // EM BREVE
    // PUBLIC
        app.use(express.static(path.join(__dirname,"public")))
// ROTAS
    app.use('/adm', adm)
// OUTROS
const PORT = 8089
app.listen(PORT,() =>{
    console.log("Servidor rodando! ")
})