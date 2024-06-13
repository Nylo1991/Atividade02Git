//loja fornece 10% de desconto para funcionários

const ler = require('readline-sync');

let valor = ler.questionFloat(" Digite o valor de sua Compra: ");

console.clear(); // limpar a tela 

console.clear("---------- Menu OPÇÕES DE PAGAMENTO ----------");
console.log("1. Cliente Comum \n 2. Funcionário \n 3. Vip ");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let result = 0;

switch (opt) {
    case 1:
        result = valor 
        console.log(` o valor da sua compra ficára em ${result}`);
        break;
        
    case 2: 
        result = valor -= valor * 0.10;
        console.log(`o valor da compra para funcionário ficára em ${result}`);
        break

    case 3:
        result = valor -= valor * 0.05;
        console.log(`o valor da compra para Clientes Vip ficára em ${result}`);
        break
    
    default:
        console.log("Opção invalida!!!");
        break;
}