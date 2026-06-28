function paraRomano(num) {
  const valores = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let resultado = "";

  for (const [valor, romano] of valores) {
    while (num >= valor) {
      resultado += romano;
      num -= valor;
    }
  }

  return resultado;
}

console.log(paraRomano(550)); // DCC