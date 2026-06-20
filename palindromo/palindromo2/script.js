

var n=0;
var list= null;
var list2=null
var num=0;
var nump=-1;
var numn=0;
var lista= null

//var cont = prompt("Digite o numero de letras da palavra:");
//while(i<cont){
var palavra = prompt("Digite uma frase ou uma palavra:");
list=palavra.toLowerCase()
lista=list.replace(/\s/g,"");
list2=lista.trim();

console.log(list2);
document.write(list)

console.log("o tamanho da lista"+list2.length);

 var tamanho=list2.length;
 

 if(tamanho%2==0){
    console.log(tamanho)
num = tamanho/2;
 }else{
    num =(tamanho-1)/2;
 }
 console.log(""+num)
while((nump<=num)&&(numn<=num)){
    nump++;
    numn++;
    console.log(":"+nump)
    console.log(":"+numn)
if( list2.at(-numn)==list2[nump]){ 
   var resposta = "---A palavra é palindromo";
    
}else{
     var resposta ="---A palavra não é palindromo"
     break;
}
}
document.write(""+resposta);
