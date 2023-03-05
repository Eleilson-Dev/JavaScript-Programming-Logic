const nomeVeiculo = document.querySelector('#veiculo');
const valor = document.querySelector('#preco');

const btn = document.querySelector('#btn');

const outVeiculo = document.querySelector('#outVeiculo');
const outEntrada = document.querySelector('#outEntrada');
const outParcelas = document.querySelector('#outParcelas');

btn.addEventListener('click', () => {
    const preco = Number(valor.value)
    const entrada = preco * 0.50;
    const parcelas = entrada / 12;
    outVeiculo.innerHTML += nomeVeiculo.value;
    outEntrada.innerHTML += entrada.toFixed(2);
    outParcelas.innerHTML += parcelas.toFixed(2);
})