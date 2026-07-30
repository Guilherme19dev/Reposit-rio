
function criarImagem(divPai,indObject){
let imagem = document.createElement("div")
    imagem.classList.add("imagem");
        const contimagem= document.createElement("img")
        contimagem.setAttribute("src",indObject.imagem)
    imagem.appendChild(contimagem)
    criarImagemSecundaria(imagem,indObject)         
divPai.appendChild(imagem)
                
}

function criarImagemSecundaria(imagem,indObject){
     let cont2ImagemSec = document.createElement("div")
        cont2ImagemSec.classList.add("imagensSecundarias")
        cont2ImagemSec.classList.add("hide")
            let cont2ImagemSecCont = document.createElement("ul")
                 for(let img of indObject.imagensSecundarias){
                    let cont2ImagemSecContI=document.createElement("li")
                    cont2ImagemSecContI.innerHTML=img
                    cont2ImagemSecCont.appendChild(cont2ImagemSecContI)
                }
        cont2ImagemSec.appendChild(cont2ImagemSecCont)
        imagem.appendChild(cont2ImagemSec)
}

function criarTexto(divPai,indObject){
    let texto = document.createElement("div")
                    texto.classList.add("texto");
                        let contTextoTitulo = document.createElement("h2")
                        contTextoTitulo.classList.add("titulo")
                        contTextoTitulo.innerText=indObject.titulo
                        texto.appendChild(contTextoTitulo)
                            let paragrafo = document.createElement("p");
                            paragrafo.innerText=indObject.descricao
                            texto.appendChild(paragrafo)
                                let buttComprar = document.createElement("button")
                                buttComprar.type="button";
                                buttComprar.classList.add("comprar")
                                buttComprar.innerText="Comprar"
                                texto.appendChild(buttComprar)
                                console.log(texto)
                                divPai.appendChild(texto)

}

function criarObjetos(objeto){
   for(let indObject of objeto){
        const contProd = document.querySelector("#produtos")
        let divPai = document.createElement("div")
        divPai.classList.add("item");
        divPai.classList.add("itemclass")
            console.log(divPai)
               criarImagem(divPai,indObject)
               criarTexto(divPai,indObject)
                contProd.appendChild(divPai)

   } 
  }
function pesquisar(){
   
                 const search= document.querySelector("#search")
             const button=document.querySelector("#bot")
         let tituloDaPagina = document.querySelector('#titulo-do-produto h1')
         let paginaProdutos = document.querySelector("#container-de-produtos")
     let paginaInicial = document.querySelector("#container")
             
button.addEventListener("click",function(){
    paginaProdutos.classList.add("hide");
     paginaInicial.classList.remove("hide");
    let titles = document.querySelectorAll(".titulo")
    let botoesDeCompra = document.querySelectorAll(".comprar")
    tituloDaPagina.innerHTML=search.value
    console.log(tituloDaPagina)
    titles.forEach(title =>{
        
                 const elEscondido = title.parentElement.parentElement
                     elEscondido.style.display="flex";
                        if(title.innerText.toLowerCase().includes(search.value.toLowerCase().trim())){
                            console.log("boua")
                                elEscondido.style.display="flex";
                            }else{
                                const elEscondido = title.parentElement.parentElement
                            elEscondido.style.display="none";
                            
                            }
    })  
                        }  
) 
                }



async function chamarBancoDeProdutos(){
    try{
const dados = await fetch('bancoDeProdutos.json');
  let objeto = await dados.json()
      criarObjetos(objeto)
        pesquisar()
        redirecionar(objeto)
}catch{
        console.error("error")
    }
     

}
  chamarBancoDeProdutos()

  function criarPaginaDoProduto(elementPai,objeto){
 let imagemDaDiv = elementPai.querySelector("img")
                     let conteudoDoTitulo = elementPai.querySelector(".titulo")
                     let imagensSecDoProd = elementPai.querySelectorAll("li")
                     console.log(imagensSecDoProd)
                     let conteudoDaPagina = elementPai.querySelector("p")
                     let imagemDoProdutop = document.querySelector("#imagens img")
                     let tituloDaPaginaP = document.querySelector('#texto h1')
                     let conteudoDaPaginaP = document.querySelector("#texto p")
                     let outrasImagens = document.querySelector("#outrasImagens")
                         imagemDoProdutop.setAttribute("src",imagemDaDiv.src)
                         tituloDaPaginaP.innerHTML = conteudoDoTitulo.innerHTML
                         conteudoDaPaginaP.innerHTML = conteudoDaPagina.innerHTML
                         outrasImagens.innerHTML=""
                            for( let imgSecProd of imagensSecDoProd){
                                let indvSecundariaimg = document.createElement("img") 
                                indvSecundariaimg.classList.add("imagem")
                                indvSecundariaimg.setAttribute("src","")
                                indvSecundariaimg.setAttribute("src",imgSecProd.innerHTML)
                                    console.log(imgSecProd.innerHTML)
                                    outrasImagens.appendChild(indvSecundariaimg)
                            }
                            trocarImagem(outrasImagens,imagemDoProdutop)
                            mostrasOutrosProdutos(elementPai,objeto)
}
function redirecionar(objeto){
   let botoesDeCompra = document.querySelectorAll(".comprar")
    console.log(botoesDeCompra) 
         botoesDeCompra.forEach(botao=>{
         botao.addEventListener("click",function(){
         let paginaProdutos = document.querySelector("#container-de-produtos")
         paginaProdutos.classList.remove("hide");
             let paginaInicial = document.querySelector("#container")
             paginaInicial.classList.add("hide");
                let elementPai = botao.parentElement.parentElement
                let elementoAbrangente = botoesDeCompra
                  criarPaginaDoProduto(elementPai,objeto)
                 // abrirPaginaProduto(divOutrosProd,objeto)
                 let DivMae = document.querySelector("#outrosProdutos")
                 console.log(DivMae)
                // botao.addEventListener("click",function(){
                let divOutrosProd = document.querySelectorAll(".itemSecundario button")
                 console.log(divOutrosProd)
                DivMae.addEventListener("click",function(e){
                    if(e.target.classList.contains("confira")){
                    let botConfira = DivMae.querySelectorAll(".confira")
                    console.log(botConfira)
                 botConfira.forEach(divUmProd =>{
                    if(e.target===divUmProd){
                  console.log(e.target)
                  console.log(elementPai)
                  console.log(divOutrosProd)
                  console.log(divUmProd)

                  abrirPaginaProduto(objeto,divUmProd) 
                    }
                        
                })
            }
                 })
                // })
                
                 
                 
   }) 
})
}

function trocarImagem(outrasImagens,imagemDoProdutop){
 const imagemSecondClick =outrasImagens.querySelectorAll("img")
console.log(imagemSecondClick)
imagemSecondClick.forEach(img2=>{
    const img2p = img2
    img2.addEventListener("click",function(){
        console.log("bom dia tarde")
        const imageminicial = imagemDoProdutop.src
        const second = img2.src
        imagemDoProdutop.setAttribute("src","")
        imagemDoProdutop.setAttribute("src",second)
        img2.setAttribute("src","")
        img2.setAttribute("src",imageminicial)
        
        console.log(img2)
    })
})

}
function mostrasOutrosProdutos(elementPai,objeto){
let elementoPaiImagens = elementPai.querySelector("img")
let divOutrosProd = document.querySelector("#outrosProdutos")
console.log(elementPai)
divOutrosProd.innerHTML=""
for(let objuni of objeto){
if(elementoPaiImagens.src!==objuni.imagem){
    let divDoSec = document.createElement("div")
    divDoSec.classList.add("itemSecundario")
    console.log(divDoSec)
    imageSegunda = document.createElement("div")
    imageSegunda.classList.add("imagemSec")
    let imageDoProd = document.createElement("img")
    imageDoProd.src=objuni.imagem
    imageSegunda.appendChild(imageDoProd)
    divDoSec.appendChild(imageSegunda)

    let divDosTexto = document.createElement("div")
    divDosTexto.classList.add("conteudo")
    let titleProd= document.createElement("h1")
    titleProd.innerHTML=objuni.titulo
    let textProd=document.createElement("h2")
    textProd.innerHTML=objuni.descricao
    let botaoConfira = document.createElement("button")
    botaoConfira.classList.add("confira")
    botaoConfira.innerHTML="Confira"
    divDosTexto.appendChild(titleProd)
    divDosTexto.appendChild(textProd)
    divDosTexto.appendChild(botaoConfira)
    divDoSec.appendChild(divDosTexto)
     divOutrosProd.appendChild(divDoSec)


    
        console.log(objuni.imagem)
        //console.log(elementoPaiImagens)
        
    }
   
}
    
}
   function abrirPaginaProduto(objeto,divUmProd){
  //  let elemento32=elementPai
  let botaoProducts = document.querySelectorAll(".confira")
  console.log(objeto)
  console.log(botaoProducts)
  let btnP=divUmProd
 let todosOsOutros = document.querySelectorAll("#produtos .item")
//criarPaginaDoProduto(elPaiPagina,divOutrosProd)
console.log(todosOsOutros)
        console.log(btnP)
         let allProducts = btnP.parentElement.parentElement
          console.log(allProducts)
      console.log(botaoProducts)
 
let imagemOfProduct = allProducts.querySelector(".imagemSec img")
console.log(imagemOfProduct)
for(let umOutro of todosOsOutros){
    let umaImagem = umOutro.querySelector("img")
    console.log(umaImagem.src)
    console.log(imagemOfProduct.src)
if(imagemOfProduct.src == umaImagem.src){
console.log("oiiiiii")
console.log(imagemOfProduct)
console.log(umaImagem)

   criarPaginaDoProduto(umOutro,objeto)
   
}  
}
   

   }   