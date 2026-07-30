let Mapa = [
    ["E", 1, 2],
    [1, 3, 4],
    [1, 2, "S"]
];

console.log(Mapa);

let somaFinal = 0;
let melhorCaminho = [];

const movimentos = [
    [-1, 0], // cima
    [1, 0],  // baixo
    [0, -1], // esquerda
    [0, 1]   // direita
];

function calcularPosicao(g, n, soma) {

    if (Mapa[g][n] === "E") {

        if (soma > somaFinal) {
            somaFinal = soma;
        }

        console.log("Fim encontrado!");
        console.log("Soma:", soma);

        return;
    }

    for (let i = 0; i < movimentos.length; i++) {

        let novoG = g + movimentos[i][0];
        let novoN = n + movimentos[i][1];

        deVerificacaoAlt(novoG, novoN, soma);
    }
}

function deVerificacaoAlt(g, n, soma) {

    if (
        g < 0 ||
        g >= Mapa.length ||
        n < 0 ||
        n >= Mapa[0].length
    ) {
        return;
    }

    deVerificacaoLarg(g, n, soma);
}

function deVerificacaoLarg(g, n, soma) {

    let valor = Mapa[g][n];

    if (valor === "S") {
        calcularPosicao(g, n, soma);
        return;
    }

    if (valor === "E") {
        calcularPosicao(g, n, soma);
        return;
    }

    if (typeof valor === "number") {

        let antigo = Mapa[g][n];

        // marca como visitado
        Mapa[g][n] = "X";

        calcularPosicao(g, n, soma + antigo);

        // desfaz (backtracking)
        Mapa[g][n] = antigo;
    }
}

function loop() {

    let inicioG = 0;
    let inicioN = 0;

    for (let i = 0; i < Mapa.length; i++) {

        for (let j = 0; j < Mapa[i].length; j++) {

            if (Mapa[i][j] === "S") {
                inicioG = i;
                inicioN = j;
            }

        }

    }

    calcularPosicao(inicioG, inicioN, 0);

    console.log("----------------------");
    console.log("Maior soma:", somaFinal);

}

loop();