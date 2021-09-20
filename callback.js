function estudar(){
    return "leu muito";
}

function serAprovado(){
    return " Leu muito";
}

//função que recebe callback
function concurso(resposta){
    return "O Aluno foi aprovado: " + resposta();
};


console.log(concurso(estudar))
