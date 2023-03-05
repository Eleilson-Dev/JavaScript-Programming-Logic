const inSaque = document.querySelector('#inSaque');
const bntExibir = document.querySelector('#Exibir');
const notasdeCem = document.querySelector('#notas_de_100');
const notasdeCinquenta = document.querySelector('#notas_de_50');
const notasdeDez = document.querySelector('#notas_de_10');
let resto;

const calcSaque = () => {

    notasdeCem.textContent = '';
    notasdeCinquenta.textContent = '';
    notasdeDez.textContent = '';

    const saque = Number(inSaque.value);
    if(saque === 0 || isNaN(saque)) {
        alert('Informe o valor do saque corretamente');
        inSaque.focus();
        return;
    }

    if(saque % 10 !== 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }
    
    const notasDe100 = Math.floor(saque / 100);
    resto = saque % 100;
    const notasDe50 = Math.floor(resto / 50);
    resto = saque % 50;
    const notasDe10 = Math.floor(resto / 10);

    if(notasDe100 > 0) {
        notasdeCem.textContent = `notas de 100: ${notasDe100}`;
    }
    if(notasDe50 > 0) {
        notasdeCinquenta.textContent = `notas de 50: ${notasDe50}`;
    }
    if(notasDe10 > 0) {
        notasdeDez.textContent = `notas de 10: ${notasDe10}`;
    }

}

bntExibir.addEventListener('click', calcSaque);