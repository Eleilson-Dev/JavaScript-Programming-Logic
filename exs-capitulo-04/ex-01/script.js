const numero = document.querySelector('#numero');
const res = document.querySelector('#res');
const btn = document.querySelector('#btn');

const tabuada = () => {
  const num = Number(numero.value);
  for (let i = 1; i <= 10; i++) {
    res.innerHTML += `${num} X ${i} = ${num * i} <br>`;
  }
}

btn.addEventListener('click', () => {
  res.textContent = '';
  if(numero.value === '' || isNaN(numero.value)) {
    alert('Adicione um valor valido');
    return
  }
  tabuada()
})
