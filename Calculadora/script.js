let base = 0;
let numero = 0;
let numero3 = 0;
let numero2 = 0;
let cliques = 0;
let operadorSelecionado = null;

const idToNumber = {
  one: 1, two: 2, three: 3,
  four: 4, five: 5, six: 6,
  seven: 7, eight: 8, nine: 9,
  zero: 0
};

const idToOperadores = {
  mais: "+",
  menos: "-",
  vezes: "*",
  divisao: "/"
};

// -------- BOTÕES NUMÉRICOS --------
Object.keys(idToNumber).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {
    let valor = idToNumber[id];

    if (cliques < 4) {
      cliques++;
      base = cliques - 1;

      numero += valor * 10 ** base;
    }
  });
});

// -------- BOTÕES DE OPERADORES --------
Object.keys(idToOperadores).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {
    operadorSelecionado = idToOperadores[id];

    numero2 = numero;
//document.getElementById("resutado4").innerText = numero2 ;

    console.log('Resultado:', numero2);
   let resutadoConta=numero2;
   document.getElementById("resutado").innerText = resutadoConta;
    numero3 = numero2;
    numero = 0;
    cliques = 0;
    base = 0;

    console.log('Operador:', operadorSelecionado);
  });
});

// -------- BOTÃO DE RESULTADO (ex: "=") --------
const igual = document.getElementById("igual");

if (igual) {
  igual.addEventListener('click', () => {
    if (operadorSelecionado === "+") {    
      numero2 += numero;
    } else if (operadorSelecionado === "-") {     
      numero2 -= numero;
    } else if (operadorSelecionado === "*") {      
      numero2 *= numero;
    } else if (operadorSelecionado === "/") {   
     console.log( '',numero2 /= numero);
    }
    

   let resutado=numero;
   console.log('O ultimo numero e:',numero3,operadorSelecionado,resutado);

   document.getElementById("resutado2").innerText = resutado ;

   document.getElementById("resutado3").innerText = operadorSelecionado ;
   alert("o valor de numero um e" + numero)

   console.log('Resultado:', numero2);

   let resutadoConta=numero2;
   
   document.getElementById("resutado").innerText = resutadoConta;
    // reset
    numero = 0;
    cliques = 0;
    base = 0;
    console.log('Número1 atual:', numero);
      console.log('Resultado:', numero);
      console.log('o numero 3 vale:', numero3);
      
  
  });
}
