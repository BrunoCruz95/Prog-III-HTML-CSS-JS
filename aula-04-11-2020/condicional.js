//CONDICAO SE
var nota = 2
if(nota >= 7){
    console.log("\nAPROVADO 😍")
}else if (nota < 4){
    console.log("\nREPROVADO 🤣")
}else{
    console.log("\nPROVA FINAL 😒")
}
// OPERADOR TERNARIO
var nota2 = 7
var cond = nota2>=7 ? "Aprovado":"Reprovado"
console.log("\nCondição: "+cond)
// === !==
var numero = 1
if(numero === '1'){
    console.log("Verdade")
}else{
    console.log("Falso")
}