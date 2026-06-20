var letra= null;
var cont=0;
var i=0;
var n=0;
var list =[];
var num=0;
var nump=-1;
var numn=0;

var cont = prompt("Digite o numero de letras da palavra:");
while(i<cont){
var letra = prompt("Digite uma letra da palavra:");
document.write(""+letra);
document.write("-------");
list[n]=letra
console.log(list);
i++;
n++;
}
document.write(list)
console.log(list);
console.log(list.length);

 var tamanho=list.length;
 

 if(tamanho%2==0){
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
if( list.at(-numn)==list[nump]){ 
   var resposta = "---A palavra é palindromo";
    
}else{
     var resposta ="---A palavra não é palindromo"
}
}
document.write(""+resposta);
