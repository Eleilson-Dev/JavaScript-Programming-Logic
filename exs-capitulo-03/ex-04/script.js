const inNumero = document.querySelector('#inNumero');
const exibirRaiz = document.querySelector('#exibir_raiz');
const resposta = document.querySelector('#resposta');

const calcRaiz = () => {
    const numero = Number(inNumero.value);
    const raiz = Math.sqrt(numero);
    const rest = raiz % 1;

    if(numero === 0 || isNaN(numero)) {
        alert('Informe a hora no Brasil corretamente');
        inNumero.focus();
        return
    }

    if(rest === 0) {
        resposta.textContent = raiz;
    } else {
        resposta.textContent = 'Não ha raiz exata';
    }
}

exibirRaiz.addEventListener('click', calcRaiz);