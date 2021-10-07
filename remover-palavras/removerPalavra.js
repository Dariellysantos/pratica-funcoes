function removerPalavraDaFrase(frase, palavraARemover) {
  if (frase == "") {
    return Error("A frase recebida é inválida: vazia");
  }
  if (palavraARemover == "") {
    return Error("A palavra a ser encontrada é inválida: vazia");
  }
  if (typeof frase !== "string") {
    return Error("A frase recebida é inválida: um número!");
  }
  if (typeof palavraARemover !== "string") {
    return Error("A palavra a ser encontrada é inválida: um número");
  }

  let listaFrase = frase.split(" ");
  let indiceDaPlavra = listaFrase.indexOf(palavraARemover);
  if (indiceDaPlavra < 0) {
    return Error(" A frase recebida não contém a palavra: " + palavraARemover);
  }

  listaFrase.splice(indiceDaPlavra, 1);
  return listaFrase.join(" ");
}

function main() {
  let resultado = removerPalavraDaFrase(
    "Batatinha quando nasce se esparama pelo chão",
    "quando"
  );

  console.log(resultado);
}
main();
