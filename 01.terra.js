//Faça um algoritmo que leia o peso de uma pessoa na Terra

const ler = require('readline-sync');

let terraPeso = ler.questionFloat("Informe seu peso na Terra: ");

console.clear(); // limpar a tela 

console.clear("---------- Menu OPÇÕES DE PLANETAS ----------");
console.log("1. MÉRCURIO \n 2. VÊNUS \n 3. MARTE \n 4. JÚPTER \n 5. SATURNO \n 6. URANO");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let planeta = 0;

switch (opt) {
    case 1:
        planeta = (terraPeso / 10) * 0.37
        console.log(`Seu Peso Kg no planeta Mercúrio será: ${planeta}`);
        break;

    case 2: 
        planeta = (terraPeso / 10) * 0.88;
        console.log(`Seu Peso Kg no planeta Vênus será: ${planeta}`);
        break

    case 3:
        planeta =(terraPeso / 10) * 0.38;
        console.log(`Seu Peso Kg no planeta Marte será ${planeta}`);
        break

    case 4:
        planeta = (terraPeso / 10) * 2.64;
        console.log(`Seu Peso Kg no planeta Júpter será ${planeta}`);
        break

        case 5:
        planeta = (terraPeso / 10) * 1.15;
        console.log(`Seu Peso Kg no planeta Saturno será ${planeta}`);
        break

        case 6:
        planeta = (terraPeso / 10) * 1.17;
        console.log(`Seu Peso Kg no planeta Urano será ${planeta}`);
        break
        
    default:
        console.log("Opção invalida!!!");
        break;
}