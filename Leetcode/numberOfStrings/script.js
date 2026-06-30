const captureWord = document.querySelector("#palavra")
const responseWord = document.querySelector("#resposta")
const btn=document.querySelector("#btn")

btn.addEventListener("click",function(){
let wordinit = captureWord.value
wordinit = wordinit.toLowerCase()
const arrayOfWords=["bm", "bom", "bm", "m"]
let result=[]
let timer=0
let i = 0
for( i=0; i <wordinit.length ;i++){
   if(wordinit==arrayOfWords[timer]){
            result.push(wordinit)
            i=0
            timer++
   }
      
           for(let j = 0;j<arrayOfWords[timer].length;j++){
              if(wordinit[i]==arrayOfWords[timer][j]){
                    result.push(arrayOfWords[timer][j])
                    }                                                        }
     if(i==wordinit.length-1){
        if(timer<arrayOfWords.length-1){
           timer++
                i=0
                                             }
                                        }
                                     }
   
console.log(result)
resposta.value=result
})