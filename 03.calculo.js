// programa, utilizando estrutura de condição

const ler = require('readline-sync');

let num = ler.questionFloat("Digite um numero: ");

console.clear(); // limpar a tela 

console.clear("---------- Menu OPÇÕES DE CÁLCULO ----------");
console.log("101. Raiz quadrada \n 102. A metade \n 103. 10% do número \n 104. O dobro");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let result = 0;

switch (opt) {
    case 101:
        result = Math.sqrt(num).toFixed(2);
        console.log(` o valor da Raiz é ${result}`);
        break;
        
    case 102: 
        result = num /2;
        console.log(`A metade do valor é ${result}`);
        break

    case 103:
        result = num - num*0.10;
        console.log(`10% do valor é ${result}`);
        break

        case 104:
        result = num + num;
        console.log(`o doblo do valor é ${result}`);
        break
    
    default:
        console.log("Opção invalida!!!");
        break;
}