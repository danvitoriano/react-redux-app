export default class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  toString() {
    return `Pessoa: ${this.nome}`;
  }
}

const pessoa = new Pessoa("Danilo");
console.log(pessoa.toString());
