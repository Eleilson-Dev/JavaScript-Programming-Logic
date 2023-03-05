const titulo = document.querySelector('#nome');
const inDuracao = document.querySelector('#duracao');
const btn = document.querySelector('#btn-converter');

const nomeDoFilme = document.querySelector('#outNome-do-filme');
const HoraEMin = document.querySelector('#outHora-minuto');

btn.addEventListener('click', () => {
    const valor = Number(inDuracao.value);
    const hora = Math.floor(valor / 60);
    const minutos = valor % 60;
    nomeDoFilme.innerHTML += titulo.value;
    HoraEMin.innerHTML = `${hora} Hora(s) e ${minutos} minuto(s)`;
    console.log(typeof valor, valor)
})