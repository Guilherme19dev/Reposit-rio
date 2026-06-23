
const balao = "baloon";
const btn=document.querySelector("#btn")
console.log(btn)
let resposta=document.querySelector("#resposta")

const vazia=[]
let i = 0;
let pbase= balao.split("")

btn.addEventListener("click",function(){
  i=0
  resposta.value=null
let init = document.querySelector("#barrinha")
var palavra=init.value

for(let j=0;j<palavra.length;j++){
(palavra[j]==pbase[0])
pbase.shift()
console.log(pbase)
if(pbase[0]==vazia[0]){
  pbase = balao.split("")
  console.log(pbase)
  i++;
}

}
console.log(i)
resposta.value=i
})

/*console.log(balao.length)
var resutado=[]
for( let i=0; i<balao.length;i++){
    for( let j=0;j<palavra.length;j++){
    if(balao[i]==palavra[j]){
       resutado[i]=palavra[j]
       console.log(resutado)
    }
  }
}
//var resposta = resutado.slice(resutado.indexOf("baloon"),resutado.indexOf+=6)
console.log(resutado.indexOf("baloon"))
console.log(resutado);
//console.log(resposta)*/

