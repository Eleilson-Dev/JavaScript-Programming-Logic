const root = document.querySelector('.root');

const arrayList = [
  { conta: 'Aluguel', valor: 1200 },
  { conta: 'Condominio', valor: 315 },
  { conta: 'Conta de luz', valor: 120 },
  { conta: 'Seguro do carro', valor: 90 },
  { conta: 'Conta de agua', valor: 80 },
];

const sectionComponent = () => {
  const section = document.createElement('section');
  section.appendChild(h1Component());
  section.appendChild(divComponet());
  return section;
};

const h1Component = () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Programa contas do mês';
  return h1;
};

const divComponet = () => {
  const div = document.createElement('div');
  div.classList.add('conteiner');
  div.appendChild(pComponent('Decrição da conta'));
  div.appendChild(inputComponent('conta'));

  div.appendChild(pComponent('Valor a pagar'));
  div.appendChild(inputComponent('valor'));

  div.appendChild(buttonComponent('Registrar conta'));
  return div;
};

const inputComponent = (classParameter) => {
  const input = document.createElement('input');
  input.classList.add('input_component');
  input.classList.add(classParameter);
  return input;
};

const pComponent = (text) => {
  const p = document.createElement('p');
  p.innerHTML = text;
  return p;
};

const buttonComponent = (text) => {
  const button = document.createElement('button');
  button.innerHTML = text;
  button.addEventListener('click', () => {
    init();
  });
  return button;
};

const divComponetTwo = () => {
  const div = document.createElement('div');
  div.classList.add('conteiner');
  div.appendChild(listComponent());
  return div;
};

const listComponent = () => {
  const ul = document.createElement('ul');
  ul.innerHTML = arrayList
    .map((item) => {
      return `<li>${item.conta} - R$ ${item.valor.toFixed(
        2,
      )}</li>`;
    })
    .join('');
  return ul;
};

const sectionComponentTwo = () => {
  const amount = arrayList.map((item) => {
    return item.valor;
  });

  const total = amount.reduce((acc, item) => {
    return acc + item;
  }, 0);

  const p = document.createElement('p');
  const section = document.createElement('section');

  p.innerHTML = `${
    arrayList.length
  } conta(s) - Total R$ ${total.toFixed(2)}`;

  section.classList.add('list');
  section.appendChild(divComponetTwo());
  section.appendChild(p);
  return section;
};

const init = () => {
  const conta = document.querySelector('.conta');
  const valor = document.querySelector('.valor');
  const num = Number(valor.value);

  const sectionList = document.querySelector('.list');

  if (conta.value.trim() === '' || isNaN(num)) {
    alert('adicione campos validos');
    return;
  } else if (valor.value === '') {
    alert('adicione campos validos');
    return;
  }

  root.removeChild(sectionList);

  const value = {
    conta: conta.value,
    valor: num,
  };

  arrayList.push(value);
  root.append(sectionComponentTwo());

  conta.focus();
  conta.value = '';
  valor.value = '';
};

window.addEventListener('load', () => {
  root.append(sectionComponent());
  root.append(sectionComponentTwo());
});
