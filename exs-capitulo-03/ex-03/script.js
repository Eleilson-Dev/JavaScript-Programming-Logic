const inHoraBrasil = document.querySelector('#horaBrasil'); 
const outHoraFranca = document.querySelector('#horaFranca'); 

const btnExibir = document.querySelector('#btn_exibir');

const calcFusoHorario = () => {
    const horaBrasil = Number(inHoraBrasil.value);

    if(horaBrasil === 0 || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente');
        inHoraBrasil.focus();
        return
    }
    
    let horario = horaBrasil + 5;

    if(horario > 24) {
        horario = horario - 24;
    }

    outHoraFranca.textContent += horario.toFixed(2)
}

btnExibir.addEventListener('click', () => {
    calcFusoHorario();
}); 

