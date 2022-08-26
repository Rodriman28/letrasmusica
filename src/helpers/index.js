export function parseText(texto) {
  const textoParseado = texto.split("").map((a) => {
    if (a === " ") {
      a = "-";
    }
    return a;
  });
  return textoParseado.join("").toLowerCase();
}
