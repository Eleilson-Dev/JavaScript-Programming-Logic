class Media {
    constructor(nota1, nota2) {
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    calcMedia() {
        const media = (this.nota1 + this.nota2) / 2 ;
        return media;
    }
   
}

const m1 = new Media(7, 8);
const template = `a media entre a nota ${m1.nota1.toFixed(1)} e a nota ${m1.nota2.toFixed(1)} é igaual a ${m1.calcMedia()}`;
console.log(template);