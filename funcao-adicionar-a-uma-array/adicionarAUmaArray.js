function adicionarPalavraArray(palavras, palavraAadicionar) {
  palavras.push(palavraAadicionar);
  return palavras;
}

function main() {
  let lista = "maça,pera";
  let resultado = adicionarPalavraArray(lista.split(","), "caqui");

  console.log(resultado);
}

main();
