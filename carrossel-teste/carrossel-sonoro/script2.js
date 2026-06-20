const num = document.querySelectorAll(".slide");
let i=0;
const musi3 = document.querySelector("#meu-audio3");   
const musi2 = document.querySelector("#meu-audio2");   
const musi = document.querySelector("#meu-audio1");   
const botao = document.querySelectorAll(".bot")
const tamanho = num.length
const tamanho2=tamanho-1;
const bt1=botao[1]
botao.forEach(botao => {
   botao.addEventListener("click",function(){ 
          
    function direcao(){
            if(botao==bt1){
                if(i<tamanho2){
                   
                     i++;
                     
                    return i 
                }else{
                    
                   i=0;
                   
                    return i
                }
            }else{
                if(i>0){
                    
                    i--;
                    
                    return i 
                    
                }else{
                    
                i=tamanho2;
                
                return i
            }
            }
            }
            i=direcao();
                var music1=setTimeout (function (){
                    const musi = document.querySelector("#meu-audio1");   
                    musi.play();
                },0)
                        var music2=setTimeout(function(){
                            const musi2 = document.querySelector("#meu-audio2");   
                            musi2.play();
                        },0)
                            var music3=setTimeout(function(){
                                const musi3 = document.querySelector("#meu-audio3");   
                                musi3.play();
                            },0)
            document.querySelector('.aparecendo').classList.remove('aparecendo');
            num[i].classList.add('aparecendo');
                             const planoDeFundo = document.querySelector("#container")
                                function cor(callback){
                                    if(i==0){       
                                        clearTimeout(music3)
                                        clearTimeout(music2)
                                        musi3.pause()
                                        musi2.pause()
                                       planoDeFundo.style.backgroundColor="rgb(23, 20, 47)";  
                                        music1
                                        
                                    }
                                        else if(i==1){
                                            clearTimeout(music1)
                                            clearTimeout(music3)
                                            musi.pause()
                                            musi3.pause()
                                        planoDeFundo.style.backgroundColor="rgb(47, 34, 20)";  
                                            music2
                                        }else{
                                            clearTimeout(music2)
                                            clearTimeout(music1)
                                            musi2.pause()
                                            musi.pause()
                                        planoDeFundo.style.backgroundColor="rgb(20, 47, 21)"; 
                                            music3
                                        }
                                        console.log(i)
                                        
                                    }  

cor(i);


 
}
)
;
});

      


