const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());
// get
// post
// put
// delete
app.get('/alunos', (req, res) => {
    res.json(data);
})

app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = data.find(al => al.id == id);

    if (!aluno)
        return res.status(204).json();
    res.json(aluno);
});

// POST

app.post('/alunos', (req, res) => {
    const { nome, email } = req.body;
    data.push({
        id: 4,
        nome,
        email
    });
    res.json(data);
});

app.get('/', (req, res) => {
    res.send("Olá Turma de Programação III")
});

app.listen(3000, () => {
    console.log("O servidor está executando na porta 3000");
});