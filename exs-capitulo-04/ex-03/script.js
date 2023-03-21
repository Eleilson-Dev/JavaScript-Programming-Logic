do {
  var num = Number(prompt('Numero: '));
  if (num === 0 || isNaN(num)) {
    alert('digite um numero valido');
  }
} while (num === 0 || isNaN(num));

let pares = `pares entre 1 e ${num} :`;

if (num > 1) {
  pares = pares + ' 2';
}

for (let i = 4; i <= num; i = i + 2) {
  pares = pares + `, ${i}`;
}

alert(pares);
