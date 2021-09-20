let ticoTeco=(num1, num2)=>{
    //●	Você deve imprimir os números de 1 a 100;
      for(let num=1; num <= 100; num++){
        //●	Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir a palavra “ticoTeco”.
        if(num % num1 === 0 && num %num2===0){
          console.log("ticoTeco" + num)
        }
        //●	Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro, você deve imprimir a palavra "Teco" em vez do número correspondente;
          if(num % num1 === 0){
            console.log("tico " + num);
          }   
         // ●	Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro, você deve imprimir a palavra “tico” em vez do número correspondente;
          else if(num % num2 === 0){
            console.log("Teco " + num)
          }
          else {
            console.log(num)
          }
      }
  }
  ticoTeco(3,7)