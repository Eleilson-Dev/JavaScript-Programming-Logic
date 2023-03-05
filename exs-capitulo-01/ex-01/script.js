const jantar = 80;
const porcentagem = 0.10;
let gorgeta;

function calcValorTotal(valor, porcentagem) {
    gorgeta = valor * porcentagem;
    console.log(`valor a ser pago ao garçon em gorgeta: R$ ${gorgeta.toFixed(2)}`)
    console.log(`valor total do jantar é R$ ${(valor + gorgeta).toFixed(2)}`)
}

calcValorTotal(jantar, porcentagem)