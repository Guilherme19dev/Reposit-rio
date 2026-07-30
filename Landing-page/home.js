const caixas = document.querySelectorAll(".caixa")
console.log(caixas)
const botao = document.querySelectorAll(".btn")
const buttonLeft=document.querySelector("#left")
console.log(buttonLeft)
const banners = document.querySelectorAll(".banner")
const buttonRight=document.querySelector("#right")
console.log(buttonRight)
let i=0

botao.forEach(bot => {
 bot.addEventListener("click",function(){
if(buttonLeft===bot){
   
    console.log("bom dia")
     console.log(i)
     caixas[i].classList.toggle("display");
     if(i>0){ 
     i-- 
    }else{
        i=caixas.length-1;
    }
     console.log(i)
      caixas[i].classList.toggle("display");
    
   
    }else{
       
     console.log("boa noite")
     caixas[i].classList.toggle("display");
     if(i<caixas.length-1){ 
    i++
    }else{
        i=0;
    }caixas[i].classList.toggle("display");
}})   
});
banners.forEach(banner=>{
    banner.addEventListener("click", function(){
        banner.classList.add("fadeout")
    })
})