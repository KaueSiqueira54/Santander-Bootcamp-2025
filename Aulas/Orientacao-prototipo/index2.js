function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é ${this.nome}`);
};

const kaue = new Pessoa("Kaue", 30);

kaue.falar();

//Outra forma de fazer o mesmo que acima
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

Pessoa.falar;
