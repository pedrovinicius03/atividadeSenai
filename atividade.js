var listaDePeças = ("Carburador","Motor","Pneu","Correia dentada","Filtro de ar");

if(listaDePeças.length > 5){
    console.log("Não é possivel cadastrar por excesso de peças")
}else{
    console.log("Limite permitido")
}

let peso = 100;

if(peso >= 100){
    console.log("Peso permitido")
}else{
    console.log("Peso não permitido")
}

let peca = "Pneu";

if(peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é válido")
}
