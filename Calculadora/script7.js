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

// -------- FUNÇÃO DE CÁLCULO --------
function calcular() {
  if (operadorSelecionado === "+") {    
    numero2 += numero;
  } else if (operadorSelecionado === "-") {     
    numero2 -= numero;
  } else if (operadorSelecionado === "*") {      
    numero2 *= numero;
  } else if (operadorSelecionado === "/") {   
    if (numero === 0) {
      alert("Não pode dividir por zero");
      return;
    }
    numero2 /= numero;
  }
}

// -------- BOTÕES NUMÉRICOS --------
Object.keys(idToNumber).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {
    let valor = idToNumber[id];

    // ✅ montagem correta do número
    numero = numero * 10 + valor;

    document.getElementById("resutado2").innerText = numero;
  });
});

// -------- BOTÕES DE OPERADORES --------
Object.keys(idToOperadores).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {

    if (operadorSelecionado !== null) {
      calcular();
    } else {
      numero2 = numero;
    }

    // ✅ ZERA numero logo após transferir
    numero = 0;

    operadorSelecionado = idToOperadores[id];

    document.getElementById("resutado").innerText = numero2;
    document.getElementById("resutado3").innerText = operadorSelecionado;

    numero3 = numero2;
  });
});

// -------- BOTÃO DE RESULTADO "=" --------
const igual = document.getElementById("igual");

if (igual) {
  igual.addEventListener('click', () => {

    if (operadorSelecionado !== null) {
      calcular();
    }

    document.getElementById("resutado").innerText = numero2;

    // ✅ limpa numero após uso
    numero = 0;
    operadorSelecionado = null;

    console.log('Resultado final:', numero2);
  });
}