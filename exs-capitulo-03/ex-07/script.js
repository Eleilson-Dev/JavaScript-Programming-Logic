const inVelociadePermitidade = document.querySelector('#inVelocidade_Permitida');
const inVelociadeDoCondutor = document.querySelector('#inVelocidade_Do_Condutor');

const resposta = document.querySelector('#resposta');
const bnt = document.querySelector('#bnt');

const verificaMulta = () => {
    const velociadePermitidade = Number(inVelociadePermitidade.value);
    const velociadeDoCondutor = Number(inVelociadeDoCondutor.value);

    const velocidadeEmPorcentagem = 
    velociadePermitidade + (
    velociadePermitidade * 
    0.20
    );
    const semMulta = velociadeDoCondutor <= velociadePermitidade;

    if(semMulta) {
        resposta.textContent = `Resposta: Sem multa`;
    }
    
    const multaLeve = 
        velociadeDoCondutor >
        velociadePermitidade && 
        velociadeDoCondutor <= 
        velocidadeEmPorcentagem
    ;
    
    if(multaLeve) {
        resposta.textContent = `Resposta: Multa leve`;
    }
    
    const multaGrave = velociadeDoCondutor > velocidadeEmPorcentagem;
    
    if(multaGrave) {
        resposta.textContent = `Resposta: Multa grave`;
    }
}

bnt.addEventListener('click', verificaMulta);
