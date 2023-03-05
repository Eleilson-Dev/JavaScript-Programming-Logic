const valorPorUso = document.querySelector('#valor-por-uso');
const tempoDeUso = document.querySelector('#tempo');
const pagar = document.querySelector('#pagar');

const nomeDoRemedio = document.querySelector('.nome-do-remedio');
const valorAPagar = document.querySelector('.valor-a-pagar');

const btn = document.querySelector('#btn');
let valor = 0;

btn.addEventListener('click', () => {
    const valorACada15Minutos = Number(valorPorUso.value);
    const timeUsed = Number(tempoDeUso.value);
    const time = 15;
    const resto = timeUsed % 15;
    const dividido = Math.floor(timeUsed / time);
    valor += dividido * valorACada15Minutos;
    if(resto > 0) {
        valor += 2
    }
    console.log(resto)
    valorAPagar.innerHTML = valor.toFixed(2);
    valorPorUso.value = '';
    tempoDeUso.value = '';
    valor = 0;
});


