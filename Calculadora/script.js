let base = 0;
//let contador = 0;
let numero = 0;
let numero2 = 0;
let botaoClicado=false;
let cliques=0;
//contante que armazena os valores dos ids de cada botão numerico dentro da classe em html "botoes"
const idToNumber = {
    //cada nome é um id declarado no arquivo php, para cada botão numerico
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
};
//constante que armazena os valores dos botões de operadores dentro da classe"icones""
 const idToOperadores = {
    //cada nome é uma classe declarada no arquivo php, em html
        mais: "soma",
        menos: "menos",
        vezes: "vezes",
        divisao: "divisao",
 }
// Corrigido: loop agora executa
//while (contador < 5) {
//Nesta parte do codigo iremos pegar as informações chave, 
// do nosso objeto essas informações serão usadas futuramente para fazermos 
// uma verificação
            Object.keys(idToNumber).forEach(id => {
                //Após a obtenção dos elementos chave entramos em um for each
                //que realizara alguma ação para cada id no caso foi o seletor utilizado
                //assim temos uma const um objeto que recebera os ids 
            const btn = document.getElementById(id);
            if (!btn) return;
                //Agora fazemos uma verificação de uma ação 
                // no caso verificamos se houve um clique no "btn"
                //quando isso acontece temos a passagem de valores 
                // do id no caso do nosso objeto "idToNumber"
                btn.addEventListener('click', () => {
                let valor = idToNumber[id];
                //Após isso fazemos a verificação se a ação é verdadeira 
                botaoClicado=true;
                    if(botaoClicado=true){
                        //Depois da primeira verificação fazemos verificação 
                        // neste caso verificamos se o numero de cliques não 
                        // passa de quatro para limitar o numero de digitos de "numero"
                        if(cliques<4){
                        //Agora fazemos a incrementação do valor da variável "clique"  
                        // que recebe mais um cada vez que clique for TRUE
                        cliques++;
                        //Agora temos a tranferência de valores da variável "clique"
                        //  para a variável "base", para isso temos de subtrair um 
                        // da variável "clique" pois queremos que na primeira que vez 
                        // que o código rode a "base" seja zero
                        base=cliques-1;
                        //A "base" que recebeu o valor de "clique" menos um 
                        // agora será utilizada para ser o expoente da base dez
                        numero += valor * 10 ** base; 
                        //Aqui iremos exibir o valor das variáveis"valor" e da variável"numero"   
                        alert('Button was clicked!: ' + valor);
                        console.log('O número é ' + numero);
                            }else{
                                //Nesta estrutura condicional iremos dizer o que será feito 
                                // quando o numero de cliques ser maior que 4, ou seja"clique"=5
                                //A primeira coisa a fazer é passar o valor da variável "numero" 
                                // para a variável "numero2" pois iremos reutilizar ela assim 
                                // após isso iremos retornat o valor de "numero" para 0
                                numero2=numero;
                                numero=0;
                                //Agora iremos reutilizar a variável "cliques" por isso voltamos seu valor a zero
                                cliques=0;
                                //Aqui faremos a mesma coisa que foi feita anteriormente iremos receber os valores 
                                // chave do objeto nesse caso do objeto idToOperadores
                                    Object.keys(idToOperadores).forEach(id => {
                                    const btn1 = document.getElementById(id);
                                    if (!btn1) return;
                                        btn1.addEventListener('click', () => {
                                        let operador = idToOperadores[id];

                                            Object.keys(idToNumber).forEach(id => {
                                            const btn = document.getElementById(id);
                                            if (!btn) return;
                    
                                                btn.addEventListener('click', () => {
                                                let valor = idToNumber[id];
                                                botaoClicado=true;
                                                    if(botaoClicado=true){
                                                        if(cliques<4){
                                                        cliques++;
                                                        base=cliques-1;
                                                        numero += valor * 10 ** base;                                                       
                                                        alert('Button was clicked!: ' + valor);
                                                console.log('O número é ' + numero);}}})

                                                            if(operador="soma"){
                                                                numero2=numero2+numero;
                                                                console.log('' + numero2);
                                                            }
                                                                else if(operador="menos"){
                                                                    numero2=numero2-numero;
                                                                    console.log('' + numero2);
                                                                }
                                                                    else if(operador="vezes"){
                                                                        numero2=numero2*numero; 
                                                                        console.log('' + numero2);
                                                                    }
                                                                        else{
                                                                            numero2=numero2/numero;  
                                                                            console.log('' + numero2);
                                                                        }
  alert('Button was clicked!: ' + operador);
      console.log('a operacao sera' + operador);
      console.log('O numero dois vale' + numero2);
      console.log('A base e'+ base);
      console.log('o numero de cliques e'+cliques);
 // console.log('valor inicial:', numero);
//}
                                     })})
                })}}});
  });





