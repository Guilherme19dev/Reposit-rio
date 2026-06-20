const colect = document.querySelectorAll('.card');

rodar = ()=>{
    slideshowing=document.getElementById('display');
    slideshowing.remove('display')
    seguir();

}


seguir=()=>{
    
    colect.classList.add('display');
        
    }

/* var n=0;
 console.log("ola"+n);
colect('.card').classList.add('.display');
n++;
console.log(n);
//if(n>){
    n=0;
//}*/
