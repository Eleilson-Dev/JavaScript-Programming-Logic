const inNome = document.querySelector('#nome');
const bntCalc = document.querySelector('#btn_calc');
const bntClean = document.querySelector('#btn_clean');
const rbMasculino = document.querySelector('#masculino');
const rbFeminino = document.querySelector('#feminino');
const inAltura = document.querySelector('#altura');
const pessoa = document.querySelector('#pessoa');

const calcPeso = () => {
    const masculino = rbMasculino.checked;
    const feminino = rbFeminino.checked;
    const nome = inNome.value;
    const altura = Number(inAltura.value);
    let peso;

    if(nome === "" || (masculino === false && feminino === false)) {
        alert('Por favor, informe o nome e selecione o sexo')
        return;
    }

    if(altura === 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente");
        inAltura.focus();
        return
    }

    if(masculino) {
        peso = 22 * (altura ** 2);
    } else {
        peso = 21 * (altura ** 2);
    }

    pessoa.textContent = `${nome} seu peso ideal e: ${peso.toFixed(3)}kg`;
};

const cleanCampos = () => {
    inNome.value = '';
    rbMasculino.checked = '';
    rbFeminino.checked = '';
    inAltura.value = '';
    pessoa.textContent = '';
    inNome.focus();
}

bntCalc.addEventListener('click', calcPeso);
bntClean.addEventListener('click', cleanCampos);