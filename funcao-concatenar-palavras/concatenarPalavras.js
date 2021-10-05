function concatenarPalavras(x, y) {
  if (!isNaN(x)) {
    return Error("A string recebida é inválida: " + x);
  }
  if (!isNaN(y)) {
    return Error("A string recebida é inválida: " + y);
  }

  return x + y;
}

function main() {
  let resultado = concatenarPalavras("Olá", "mundo!");
  return console.log(resultado);
}

main();
