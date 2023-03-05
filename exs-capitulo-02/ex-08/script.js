class CalcProduto {
    constructor() {
        this.nomeProdudto = document.querySelector('#name-produto');
        this.preco = document.querySelector('#preco');
        this.produto = document.querySelector('#produto');
        this.promocao = document.querySelector('.valor-a-promocao'); 
        this.tereceiroProduto = document.querySelector('#tereceiro-produto');
        this.btn = document.querySelector('#btn');
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.calc();
        });
    }

    calc() {
        const precoInicial = Number(this.preco.value);
        const dividido = precoInicial / 2;
        const precoDeTresProdutos = (precoInicial * 3) - dividido;
    
        this.preencheCampos(precoDeTresProdutos, dividido);
    }

    preencheCampos(preco, tereceiro) {
        this.produto.innerHTML = `${this.nomeProdudto.value}-`;
        this.promocao.innerHTML = `Promoção: leve 3 por apena R$: ${preco.toFixed(2)}`;
        this.tereceiroProduto.innerHTML = `O 3˚ Produto custa apenas: R$ ${tereceiro.toFixed(2)}`;
    }
}

const calcProduto = new CalcProduto();
calcProduto.init();