function transformarCaixaDaPalavra(palavraMaiuscula) {
  palavraMaiuscula = palavraMaiuscula.trim();

  if (palavraMaiuscula == "") {
    return Error("A palavra recebida é inválida: vazia");
  }
  if (typeof palavraMaiuscula !== "string") {
    return Error("A palavra recebida é inválida: não é uma string");
  }

  return palavraMaiuscula.toLowerCase();
}

function main() {
  let resultado = transformarCaixaDaPalavra("DARIELLY");
  console.log(resultado);
}

main();
