// instacia, class e objeto;

// a class é um molde
class Pessoa {
    // o constructor recebe os atributos da class
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade; 
    }
    // as funções que vem fora do constructor são os metodos internos da class
    falaNomeCompletoEIdade(){
        return `${this.nome} ${this.sobrenome} tem ${this.idade} anos`
    }
}

// instacia da class Pessoa 
// p1 agora tem os mesmos atributos e metodos internos da class Pessoa
const p1 = new Pessoa('Elleilson', 'Santtos', 23);

console.log(p1)