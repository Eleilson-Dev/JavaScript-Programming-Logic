const inNumero = document.querySelector('#inNumero')
const btn = document.querySelector('#Exibir');
const resposta = document.querySelector('#resposta');

const parOuImpar = () => {
    const numero = Number(inNumero.value);

    if(numero === 0 || isNaN(numero)) {
        alert('forneca um numero valido');
        inNumero.focus();
        return;
    }

    if(numero % 2 === 0) {
        resposta.textContent = 'Par';
    } else {
        resposta.textContent = 'Impar';
    }

}

btn.addEventListener('click', parOuImpar);
