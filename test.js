let numero = 1;
let numero2 = 2;

while (numero < 10) {
  numero++;
  console.log('ola 1');
  if (numero2 < 10) {
    continue;
  }
  console.log('ola 2');
}
