//vendas 

const ler = require('readline-sync');

let valor = ler.questionFloat("Digite o valor da venda: ");

console.clear(); // limpar a tela 

console.clear("---------- Menu OPÇÕES DE Pagamento ----------");
console.log("1. Venda a Vista \n 2. Prazo 30 dias \n 3. Prazo 60 dias \n 4. Prazo 90 dias \n 5.  cartão de débito");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let result = 0;

switch (opt) {
    case 1:
        result = valor -= valor * 0.10; 
        console.log("Venda a Vista - desconto de 10%");
        console.log(`Realizando o pagamento a Vista ficára em ${result}`);
        break;
    case 2: 
        result = valor -= valor * 0.05;
        console.log("desconto de 5%");
        console.log(`Realizando o pagamento a prazo 30 dias ficára em ${result}`);
        break
    case 3:
        result = valor;
        console.log(" mesmo preço");
        console.log(`Realizando o pagamento a prazo 60 dias ficára em ${result}`);
        break
    case 4:
        result = valor += valor * 0.05;
        console.log(" acréscimo de 5%");
        console.log(`Realizando o pagamento a prazo 90 dias ficára em ${result}`);
        break

    case 5:
        result = valor -= valor * 0.08;
        console.log(" desconto de 8%");
        console.log(`Realizando o pagamento no Cartão de debito ficára em ${result}`);
        break

    default:
        console.log("Opção invalida!!!");
        break;
}