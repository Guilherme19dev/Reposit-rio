let Mapa=[["E",1,2],[1,3,4],[1,2,"S"]]
console.log(Mapa)
let n=2;
let g=2;
let somador=0
let somaFinal=0
let verificador=0
let conjunto=0
let x=1
function main(){

}
function loop(){
for(let i = 0; i<Mapa.length+1; i++){
function resposta(){
deVerificacaoAlt()
calcularPosicao(deVerificacaoAlt)
}//resposta()
function resposta2(){
deVerificacaoLarg()
calcularPosicao(deVerificacaoLarg)
}resposta()
console.log("PALAVRA"+somador)
function resposta3(){
   deVerificacaoLarg2() 
   deVerificacaoAlt2()
   calcularPosicao(deVerificacaoLarg2,deVerificacaoAlt2)
}//resposta3()
 console.log("-------------------------------")
 //calcularPosicao(deVerificacaoAlt2)
 //console.log(somador)
 //conjunto=somador
}
function respostaFinal(){
for(let contando=0;contando<3;contando++){
   if(contando==0){
    resposta()
    if(somaFinal<somador){
    somafinal=somador
    console.log(somaFinal)
 }
   }
   else if(contando==1){
   // resposta2()
    if(somaFinal<somador){
    somafinal=somador
    console.log(somaFinal)
 }
   }
   else{
   // resposta3()
    if(somaFinal<somador){
    somafinal=somador
    console.log(somaFinal)
 }
   }
}
console.log(somaFinal)
}
respostaFinal()
 
}
 function deVerificacaoLarg(){
    if(n>verificador){
     n--;
     console.log("Valor de n:"+n)
     return n
    }
    deVerificacaoAlt()

}
 function deVerificacaoAlt(){
    if(g>verificador){
     g--;
     console.log("Valor de g:"+g)
     return g
    }
deVerificacaoLarg()}
 function deVerificacaoAlt2(){
    if(g>verificador){
     g--;
     console.log("Valor de g:"+g)
     return g
    }
}function deVerificacaoLarg2(){
    if(n>verificador){
     n--;
     console.log("Valor de n:"+n)
     return n
    }
}
     function calcularPosicao(callback1, callback2){
         if(Mapa[g][n]!=="E"){
              somador+=Mapa[g][n]
              console.log(Mapa[g][n])
              console.log("Este é o total:"+somador)
              return somador
         }
      
    }
    loop()
    
    
              /*  i=0
                g=2
                n=2
                break
            
            console.log("o N vale:"+n)
            console.log("o G vale:"+g)
            
                if(Mapa[g][n]=="E"){
                 console.log("O total da soma e:"+somador)
                 verificador++
                 i=0
                 g=2
                 n=2
                 }
                     else{
                        if(Mapa[0][n]!=="E"){
                            console.log("O G:"+g+" O N:"+n)
                            n--;
                        }else if(g!==0){
                        console.log(g,n)
                        somador+=Mapa[g][n]
                        console.log("O posicionamento do ponteiro:"+Mapa[g][n])
                        console.log("O total da soma e:"+somador)
                        console.log("Teste"+Mapa[g][n])
                        }
                     }*/
             

   