function divisao(x, y) {
  if (y < 0) {
    return new Error("ERROR: Divisão por número negativo");
  }

  const z = x / y;

  return z;
}

function main() {
  let resultado = divisao(4, -3);

  console.log(resultado);
}

main();
