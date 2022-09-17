var nomeAluno = "Roberta";

var notaPrimeiroBimestre = 7;
var notaSegundoBimestre = 9;
var notaTerceiroBimestre = 10;
var notaQuartoBimestre = 7;

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) /4

var notaFixada = notaFinal.toFixed(0)

console.log("Bem vindo(a) " + nomeAluno + "!")
console.log(notaFixada)