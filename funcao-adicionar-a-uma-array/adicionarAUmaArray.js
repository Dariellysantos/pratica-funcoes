function adicionarPalavraArray(palavras, palavraAAdicionar) {
  if (palavraAAdicionar === "") {
    return Error("A palavra a ser adicionada é inválida: vazia");
  }
  if (!isNaN(palavraAAdicionar)) {
    return Error("A palavra a ser adicionada é inválida: um número");
  }

  palavras.push(palavraAAdicionar);
  return palavras;
}

function main() {
  let resultado = adicionarPalavraArray(["jaboticaba", "morango"], "caqui");

  console.log(resultado);
}

main();
