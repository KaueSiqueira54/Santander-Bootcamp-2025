const pessoa = {
  genero: "Masculino",
};

const kaue = {
  nome: "Kauê",
  idade: 20,
  __proto__: pessoa, // Kauê extende pessoa
};

console.log(kaue.genero);
