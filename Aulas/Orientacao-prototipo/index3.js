const pessoa = {
  genero: "masculino",
};

const kaue = {
  nome: "kaue",
  __proto__: pessoa,
};

console.log(kaue.genero);
