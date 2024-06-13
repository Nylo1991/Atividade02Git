//algoritmo chamado Estacoes


const ler = require('readline-sync');

console.clear("---------- Menu OPÇÕES de Estações do Mês----------");
console.log("1. Jan \n 2. Fer \n 3. Mar \n 4. Abr \n 5. Mai \n 6. jun \n 7. Jul \n 8. Ago \n 9. Set \n 10. Out \n 11. Nov \n 8. Dez");
console.log("------------------------------------------------");
let opt = ler.questionInt(" => ");
let result = 0;

switch (opt) {
    case 1:
        console.log("em Janeiro é verão");
        break;

    case 2: 
        console.log("em Fevereiro é verão");

    case 3:
        console.log("em Março é verão");
        break

    case 4:
        console.log("em Abril é Outono");
        break

    case 5:
        console.log("em Maio é Outono");

    case 6:
        console.log("em junho é Outono");
        break

    case 7:
        console.log("em julho é Inverno");
            break;
    
    case 8: 
        console.log("em Agosto é Inverno");
            break
    
     case 9:
        console.log("em Setembro é Inverno");
            break
    
        case 10:
        console.log("em Outubro é Primavera");
    
    case 11:
        console.log("em Novebro é Primavera");
            break
    
    case 12:
        console.log("em Dezembro é Primavera");
            break
            
        default:
        console.log("Opção invalida!!!");
            break;
   
}