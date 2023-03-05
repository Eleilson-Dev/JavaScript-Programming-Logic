const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota_1');
const nota2 = document.querySelector('#nota_2');
const bnt = document.querySelector('#bnt');
const media = document.querySelector('#media');
const sitiacao = document.querySelector('#situacao');

const calcMedia = () => {
    const media_da_notas = (Number(nota1.value) + Number(nota2.value)) / 2;
    media.innerHTML = `Media das notas: ${media_da_notas.toFixed(1)}`;
    if(media_da_notas >= 7) {
        sitiacao.innerHTML = `Parabens ${nome.value} você foi aprovado`;
        sitiacao.style.color = 'blue';
        return
    }
    sitiacao.innerHTML = `sinto muito ${nome.value} você foi reprovado`;
    sitiacao.style.color = 'red';
}

bnt.addEventListener('click', calcMedia);