const inLado_A = document.querySelector('#inLado_A');
const inLado_B = document.querySelector('#inLado_B');
const inLado_C = document.querySelector('#inLado_C');
const btn = document.querySelector('#btn');

const outResposta = document.querySelector('#outResposta');
const outTypeTriangulo = document.querySelector('#outTipo_de_trinagulo');

const verificaLados = () => {
    outResposta.textContent = '';
    outTypeTriangulo.textContent = '';

    const ladoA = Number(inLado_A.value);  
    const ladoB = Number(inLado_B.value);  
    const ladoC = Number(inLado_C.value);  

    // soma dos valores dos lados do triangulo;
    const somaAeB = ladoA + ladoB;
    const somaAeC = ladoA + ladoC;
    const somaBeC = ladoB + ladoC;

    // verifica se os inputs são validos
    if(
        (ladoA === 0 || isNaN(ladoA)) ||
        (ladoB === 0 || isNaN(ladoB)) ||
        (ladoC === 0 || isNaN(ladoC))
    ) {
        alert('Adicione números validos');
        return;
    }

    // este if verifica se é possivel formar um triangulo 
    if(ladoA > somaBeC || ladoB > somaAeC || ladoC > somaAeB) {
        outResposta.textContent = 'Imposivel formar um triângulo';
        return;
    }

    // este if verifica se todos os lados são iguais
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        outResposta.textContent = 'Lados podem formar um triângulo';
        outTypeTriangulo.textContent = 'Tipo: Equilátero';
    }

    // este if verifica se pelomenos dois lados são iguais
    if(
        (ladoA !== ladoB && ladoA !== ladoC && ladoB === ladoC) ||
        (ladoB !== ladoA && ladoB !== ladoC && ladoA === ladoC) ||
        (ladoC !== ladoA && ladoC !== ladoB && ladoB === ladoA)
    ) {
        outResposta.textContent = 'Lados podem formar um triângulo';
        outTypeTriangulo.textContent = 'Tipo: Isósceles';
    }

    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        outResposta.textContent = 'Lados podem formar um triângulo';
        outTypeTriangulo.textContent = 'Tipo: Escaleno';
    }

}

btn.addEventListener('click', verificaLados);