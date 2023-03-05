const quilo = document.querySelector('#quilo');
const consumo = document.querySelector('#consumo');
const pagar = document.querySelector('#pagar');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    pagar.innerHTML = '';
    const precoPorQuilo = Number(quilo.value);
    const precoPorGrama = precoPorQuilo / 1000;
    const consumoGm = Number(consumo.value);
    const valor = (consumoGm * precoPorGrama).toFixed(2)
    
    pagar.innerHTML = `Valor a pagar R$ ${valor}`;
})