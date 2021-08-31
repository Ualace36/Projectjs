let index = 0

for (let index = 0; index <= 4; index++) {
    console.log("Olá mundo"); 
}

console.log("-------------------------------------------");
console.log("imprima somente os numeros impares no intervalo de 1 a 10");
let contador = 1 
for (let contador = 1; contador <= 10; contador++) {
    if((contador % 2) != 0) {
        console.log(contador);
    }
    
}

console.log("-------------------------------------------");
console.log("Tabuada de multiplicar");
for (let contador = 1; contador <= 10; contador++) {
        console.log("2 x "+contador+" = "+2*contador);
}