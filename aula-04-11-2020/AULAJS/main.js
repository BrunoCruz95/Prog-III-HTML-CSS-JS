/*
class minhaClasse {
    constructor() {

        this.lista = []

    }
    addElem() {

        this.lista.push("Novo Elemento")
        console.log(this.lista)
    }
}

class lista1 extends minhaClasse(){
        constructor(){
            super()
            this.usuario = "Rabert"
        }
        mostraUsuario(){
            console.log(this.usuario)
        }
}

const MinhaLista = new lista1();

document.getElementById('novo').onclick = function () {
    MinhaLista.add()
}

MinhaLista.mostraUsuario()
*/

const vetor1 = [1,2,2,4,5,6,6,4,9]

const vetor2 = vetor1.map(function (item) {
    return item * 2
});

const vetor3 = vetor1.find(function(item){
    return item === 2
});

//Arrow function
const vetor4 = vetor1.find((item)=>{
    return item === 2
});

function soma(num1, num2 = null){
    return num1 + num2;
}
console.log(soma(1))

//desestruturação

const usuario = {
    nome: "Bruno",
    idade: 19,
    peso: 190,
    endereco:{
        cidade: "Piripiri",
        estado: "Piaui",
        pais: "Brasil",
        bairro: "Crioli"
    }
}

console.log("Nome: "+usuario.nome)

console.log(`Nome: ${usuario.nome} \nIdade: ${usuario.idade} \nPeso: ${usuario.peso}`)

console.log("\nIdade:"+usuario.idade)
const{nome,idade,endereco:{estado}} = usuario
console.log("\nCidade: "+estado)

