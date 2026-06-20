const num = document.querySelectorAll(".slide");
let i=1;
const botao = document.querySelectorAll(".bot")
const tamanho = num.length
const tamanho2=tamanho-1;
console.log(tamanho2)
botao.forEach(botao => {
   console.log(botao)
   botao.addEventListener("click",function(){
    console.log(botao)
    document.querySelector('.aparecendo').classList.remove('aparecendo');
    console.log(num[2])
    num[i].classList.add('aparecendo');
    console.log(num)
    const planoDeFundo = document.querySelector("#container")
function cor(callback){
    if(i==0){
      planoDeFundo.style.backgroundColor="rgb(23, 20, 47)";     
    }
    else if(i==1){
       planoDeFundo.style.backgroundColor="rgb(47, 34, 20)";  
    }else{
       planoDeFundo.style.backgroundColor="rgb(20, 47, 21)"; 
    }
    console.log(i)
    
}   
cor(i);
i++
    if(i>tamanho2){
         i=0;
    }
}
)
;
});









