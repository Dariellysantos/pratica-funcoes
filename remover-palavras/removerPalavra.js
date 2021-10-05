function removerPalavraDaFrase(frase, palavraARemover) {
  let listaFrase = frase.split(" ");
  let indiceDaPlavra = listaFrase.indexOf(palavraARemover);
  listaFrase.splice(indiceDaPlavra, 1);
  return listaFrase.join(" ");
}

function main() {
  let resultado = removerPalavraDaFrase(
    "Batatinha quando nasce se esparrama pelo chão",
    "quando"
  );
  return console.log(resultado);
}
main();
