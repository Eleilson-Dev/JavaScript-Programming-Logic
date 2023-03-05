const nome = document.querySelector('#nome');
const bnt = document.querySelector('#bnt');
const title = document.querySelector('#title');

function myFunc() {
    if(!nome.value) {
        alert('Campo vazio');
        return
    }
    title.innerHTML += ' ' + nome.value;
    console.log(nome.value);
    nome.value = '';
}

bnt.addEventListener('click', () => myFunc());