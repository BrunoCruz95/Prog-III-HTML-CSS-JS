var funcaoSoma = require('./soma');
var funcaoMult = require('./mult');
var funcaoDiv = require('./div');
var funcaoSub = require('./sub');

var num1 =2;
var num2 = 4;

console.log(funcaoSoma(num1,num2));
console.log(funcaoMult(num1,num2));
console.log(funcaoDiv(num1,num2));
console.log(funcaoSub(num1,num2));

/*

function soma (n1, n2){
    return n1 + n2;
}
function sub (n1, n2){
    return n1 - n2;
}
function div (n1, n2){
    return n1 / n2;
}
function mult (n1, n2){
    return n1 * n2;
}
*/