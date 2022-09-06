let idade = Number(prompt("Qual é a sua idade?"));
let isMaiorIdade = confirm("Terminou o ensino médio?");
let isCursandoOutraFaculdade = confirm("Está cursando alguma faculdade?");

console.log(idade, isMaiorIdade, isCursandoOutraFaculdade)

if(idade >= 18){
    console.log("A pessoa é maior de idade.")
}else{
    console.log("A pessoa é menor de idade.")
}

if(isMaiorIdade === true){
    console.log("A pessoa terminou o ensino médio.")
}else{
	console.log("A pessoa não terminou o ensino médio.")
}

if(!isCursandoOutraFaculdade === true){
    console.log("A pessoa não está cursando alguma faculdade.")
}else{
	console.log("A pessoa está cursando alguma faculdade.")
}