const numero = document.querySelector('#numero');
const res = document.querySelector('#res');
const btn = document.querySelector('#btn');
let numbers = '';

const tabuada = () => {
  const num = Number(numero.value);
  for (let i = num; i > 0; i--) {
    numbers += `${i} <br>`;
  }
  res.innerHTML = `Entre ${num} e 1: <br> ${numbers}`;
};

btn.addEventListener('click', () => {
  if (numero.value === '' || isNaN(numero.value)) {
    alert('Adicione um valor valido');
    return;
  }
  res.innerHTML = '';
  numbers = '';
  tabuada();
});
