class Produto {
    constructor(nome, preco, parcelas) {
        this.nome = nome;
        this.preco = preco;
        this.parcelas = parcelas;
    }
    avista() {
        const valorComDesconto = this.preco - (this.preco * 0.10);
        const template = `se for pago a vista o valor será R$ ${valorComDesconto.toFixed(2)}`;
        return template;
    }
    parcelar() {
        const precoParcelado = this.preco / this.parcelas;
        const template = `se for parcelado fica ${this.parcelas}x de R$ ${precoParcelado.toFixed(2)}`;
        return template;
    }
}

const p1 = new Produto('Produdo', 60, 5);
const template = `o valor do produto é R$ ${p1.preco.toFixed(2)} ${p1.avista()} ${p1.parcelar()}`;


console.log(template)