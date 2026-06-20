const setafrente = document.querySelector('.After')
const setatraz = document.querySelector('.Before')
const slides = document.querySelectorAll('.slide')
const bottoes = document.querySelectorAll('.bot')
const carrosel = document.querySelectorAll('.carrossel')

let activo = 0
const total = slides.length
let timer;


clearInterval(timer)
timer=setInterval(()=>{
update(1)
},7000);



function update(direction){
    document.querySelector('.slide.activo').classList.remove('activo')
       document.querySelector('.bot.activo').classList.remove('activo') 
       if(direction > 0 ){
        activo = activo  +  1
        if (activo === total) {
            activo = 0

        }

       }  
        else if (direction < 0){
        activo = activo-1
        if(activo < 0){
            activo = total-1
        }
    
       }
       slides[activo].classList.add('activo')
       bottoes[activo].classList.add('activo')
}

setafrente.addEventListener('click', () =>{
   update(+1)



})



setatraz.addEventListener('click', () =>{
   update(-1)


})
