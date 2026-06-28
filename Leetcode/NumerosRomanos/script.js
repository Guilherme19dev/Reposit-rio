 let numero=document.querySelector("#inserir")
 let numResposta=document.querySelector("#resposta")
 let btn=document.querySelector("#acionar")

 btn.addEventListener("click", function(){
 console.log(numero.textContent)
 let entrada = numero.value
 let entradaConvert=entrada.toString()
 console.log(entradaConvert)
 let entradaArr = entradaConvert.split("")
  let armazena = parseInt(entradaArr[0])*100 
   console.log(armazena)
   let i=0
   

const romainObj=[
   [1,"i"],
   [4,"iv"],
   [5,"v"],
   [9,"ix"],
   [10,"x"],
   [40,"xl"],
   [50,"l"],
   [90,"xc"],
   [100,"c"],
   [400,"cd"],
   [500,"d"],
   [900,"cm"],
   [1000,"m"]
]
let resposta=[]
if(entrada==1000){
    resposta.push(romainObj[12][1])
}
if(entrada>=100 && entrada<1000){
 novoRomain= romainObj.filter(item => item[0]>=500)
  console.log(novoRomain)
if(entrada>=500){
for(let i=0;i<novoRomain.length;i++){
   
if(entrada>=900){
   resposta.push(romainObj[11][1])
   console.log(resposta)
   break
}
else if(entrada<900){
   resposta.push(romainObj[10][1])
 resposta.push(...new Array((armazena-500)/100).fill(romainObj[8][1]))
 console.log(resposta)
 break
}
}
}else if(entrada>=400){
   resposta.push(romainObj[9][1])
   console.log(resposta)
}else{
   console.log(entrada)
   resposta.push(...new Array(armazena/100).fill(romainObj[8][1]))
   console.log(resposta)
}
   entrada = entrada-armazena
} if(entrada<100 && entrada>9){
   armazena = parseInt(entradaArr[1])*10
 novoRomain= romainObj.filter(item => item[0]>=50 && item[0]<=100)
 console.log(novoRomain)
if(entrada>=50){
for(let i=0;i<novoRomain.length;i++){
if(entrada>=90){
   resposta.push(romainObj[7][1])
   console.log(resposta)
   break
}
else if(entrada<90){
   resposta.push(romainObj[6][1])
 resposta.push(...new Array((armazena-50)/10).fill(romainObj[4][1]))
 console.log(resposta)
 break
}
}
}else if(entrada>=40){
   resposta.push(romainObj[5][1])
   console.log(resposta)
}else{
   resposta.push(...new Array(armazena/10).fill(romainObj[4][1]))
   console.log(resposta)
}

    armazena = parseInt(entradaArr[1])*10
   entrada = entrada-armazena
}if(entrada<10){
    armazena = parseInt(entradaArr[2])
   console.log("ola")
 novoRomain= romainObj.filter(item => item[0]>=5)
 console.log(novoRomain)
if(entrada>=5){
for(let i=0;i<novoRomain.length;i++){
if(entrada==9){
   resposta.push(romainObj[3][1])
   console.log(resposta)
   break
}
else if(entrada<9){
   resposta.push(romainObj[2][1])
   console.log(armazena)
 resposta.push(...new Array(armazena-5).fill(romainObj[0][1]))
 console.log(resposta)
 break
}
}
}else if(entrada==4){
   resposta.push(romainObj[1][1])
   console.log(resposta)
   
}else{
   resposta.push(...new Array(armazena).fill(romainObj[0][1]))
   console.log(resposta)
}
}
console.log(resposta)
resposta=resposta.join("")
console.log(typeof resposta)
numResposta.value=resposta
})











  /*let tradutorRomano = {
    i:1,
    iv:4,
    v:5,
    ix:9,
    x:10,
    vl:40,
    l:50,
    xc:90,
    c:100,
    cd:400,
    d:500,
    dm:900,
    m:1000
  }
  let caixa=[]
  const lista=Object.keys(tradutorRomano).map(item=>item)
  const itensSetados=Object.entries(tradutorRomano).map(([nome,valor])=>{
   if(entrada==valor){
    console.log(nome)
    caixa[i]=nome
      i=1
     }})    
     const Setados=Object.entries(tradutorRomano).map(([nome,valor])=>{
     if(entrada!=valor){
       
     if(i==0){
        armazena = (parseInt(entradaArr[i]))*100
           console.log(armazena)
           if(armazena==valor){
            
            console.log(i)
           }
         else if(i==0&&armazena>=valor&&armazena<=(valor+=200)){ 
            console.log(entrada[i])
                caixa.push(...new Array((armazena/100)).fill(nome))
                console.log(caixa)
                i=1
                            }
         
    } if(i==1){
        armazena = (parseInt(entradaArr[i]))*10
         const itensSetados=Object.entries(tradutorRomano).map(([nome,valor])=>{
            if(armazena==valor){
                        caixa.push(nome);
                        console.log(caixa)
                        i=2
                            } 
                            })
                    }
                if(i==2){
        armazena = (parseInt(entradaArr[i]))*1
         const itensSetados=Object.entries(tradutorRomano).map(([nome,valor])=>{
            if(armazena==valor){
                        caixa.push(nome);
                        console.log(caixa)
                        i=2
                            } 
                            })
                    }
            }
    })
       console.log(caixa.join(""))

 */
        
   
   
   
   
   