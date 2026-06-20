let base = 0;
let numero = 0;
let numero3 = 0;
let numero2 = 0;
let cliques = 0;
let cont = 0;
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

    // ✅ Correção: não inverte mais o número
    numero = numero * 10 + valor;
    
    
    document.getElementById("resutado2").innerText = numero; 
});
});

// -------- BOTÕES DE OPERADORES --------
Object.keys(idToOperadores).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return;

  btn.addEventListener('click', () => {

    // 🔁 Se já existe operador, calcula antes
    if (operadorSelecionado !== null) {
      calcular();
    } else {
      numero2 = numero;
      
    }

    operadorSelecionado = idToOperadores[id];

    document.getElementById("resutado").innerText = numero2;
    document.getElementById("resutado3").innerText = operadorSelecionado;
    numero = 0;
  });
});

// -------- BOTÃO DE RESULTADO "=" --------
const igual = document.getElementById("igual");

if (igual) {
  igual.addEventListener('click', () => {

    if (operadorSelecionado !== null) {
      calcular();
    }

    console.log('Resultado:', numero2);

    document.getElementById("resutado").innerText = numero2;

    // reset leve (permite continuar usando resultado)
    numero = 0;
    operadorSelecionado = null;

    console.log('Número resetado:', numero);
    console.log('Resultado final:', numero2);
  });
}
