const inValor = document.querySelector('#inValor');
const outTempo = document.querySelector('#outTempo');
const outTroco = document.querySelector('#outTroco');
const btn = document.querySelector('#btn');

const minimo = 1;
const medio = 1.75;
const maximo = 3;

const parquimetro = () => {
    const valor = Number(inValor.value);
    outTempo.textContent = '';
    outTroco.textContent = '';

    if(valor === 0 || isNaN(valor)) {
        alert('adicione um valor valido');
        return;
    }

    if(valor < minimo) {
        alert('valor insuficiente');
    }
    
    if(valor === minimo) {
        outTempo.textContent = `Tempo: 30 minutos`;
    }
    
    if(valor > minimo && valor < medio) {
        let troco = valor - minimo;
        outTempo.textContent = `Tempo: 30 minutos`;
        outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
    }
    
    if(valor === medio) {
        outTempo.textContent = `Tempo: 60 minutos`;
    }
    
    if(valor > medio && valor < maximo) {
        let troco = valor - medio;
        outTempo.textContent = `Tempo: 60 minutos`;
        outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
    }
    
    if(valor === maximo) {
        outTempo.textContent = `Tempo: 120 minutos`;
    }
    
    if(valor > maximo) {
        let troco = valor - maximo;
        outTempo.textContent = `Tempo: 120 minutos`;
        outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
    }
}

btn.addEventListener('click', parquimetro);