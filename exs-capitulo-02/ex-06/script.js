const medicamento = document.querySelector('#medicamento');
const preco = document.querySelector('#preco');
const pagar = document.querySelector('#pagar');

const nomeDoRemedio = document.querySelector('.nome-do-remedio');
const valorAPagar = document.querySelector('.valor-a-pagar');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const valorPromocional = Math.floor(preco.value) * 2;
    nomeDoRemedio.innerHTML = medicamento.value;
    valorAPagar.innerHTML = valorPromocional.toFixed(2);
})