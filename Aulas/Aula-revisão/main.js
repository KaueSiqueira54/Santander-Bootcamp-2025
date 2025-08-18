const { gets, print } = require("./funcoes-auxiliares");

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let index = 0; index < numerosSorteados.length; index++) {
  const numerosSorteado = numerosSorteados[index];
  if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado;
  }
}

print(maiorValor);
