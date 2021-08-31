//Array e alguns métodos
let array = ["foco", "disciplina", "perseverança", "luta"]
console.log(array)
console.log("------------------------------------------------------------");
// Acessar elemento específico do Array
console.log("O elemento na posição 0 é:");
console.log(array[0]);
// modificar modificar e adcionar elemntos em um array
console.log("---------------------------------------------------------------------");
array.pop()
array.pop()
array.pop()
array.pop()
console.log(array)
array.unshift("trabalho", "Honestidade", "paciência", "compromisso")
console.log(array);
//Extrair elementos de uma array
console.log("---------------------------------------------------------------------");
console.log("o elementos estraído é :");
let extrairElemento = array.slice(2,3)
console.log(extrairElemento);
let array2 =["trabalho", "Honestidade", "paciência", "compromisso"]
// comparação dos arrays
console.log("---------------------------------------------------------------------");
console.log("Resultado da comparação é :");
var comparacao = array === array2
console.log(comparacao)
// inverter a ordem do array
console.log("---------------------------------------------------------------------");
console.log("Array invetido:");
let imprimirinverso = array.reverse()
console.log(imprimirinverso);
// somar elementos de um array
console.log("---------------------------------------------------------------------");
console.log("Soma dos elementos do Array: ");
let number = [1,2,3,4,5]
let soma1 = number.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma1);

// locadora de filmes
console.log("------------------------------------------------------------------------");
console.log("primeiro box de filme:");
let filmes = ["star wars".toUpperCase(), "matrix".toUpperCase(),  "mr. robot".toUpperCase(), "o preço do amanhã".toUpperCase(),  "a vida é bela".toLocaleUpperCase()]
console.log(filmes)

// segundo box de filme
console.log("------------------------------------------------------------------------");
console.log("segundo box de filmes");
let filmes2 = ["toy story".toLocaleUpperCase(), "finding Nemo".toLocaleUpperCase(), "kung-fu panda".toLocaleUpperCase(), "wally".toUpperCase(), "fortnite".toUpperCase()]
game = filmes2.pop();
console.log("ops, um game meios aos filmes:n");
console.log(game);
// adcionando um array no outro
console.log("-------------------------------------------------------------------------");
console.log("Adcionando um array com um outro: ");
let filmesCompleto = [filmes + filmes2]
console.log(filmesCompleto);

// comaprando notas
console.log("---------------------------------------------------------------------------");
console.log("O resultado da comparação é:");
let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let comparar = asiaScores === euroScores
console.log(comparar);