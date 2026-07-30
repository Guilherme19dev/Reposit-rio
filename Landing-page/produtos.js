function criarImagem(divPai,indObject){
let imagem = document.createElement("div")
                imagem.classList.add("imagem");
                const contimagem= document.createElement("img")
                contimagem.setAttribute("src",indObject.imagem)
                imagem.appendChild(contimagem)
                console.log(imagem) 
                divPai.appendChild(imagem)
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
        const contProdutos = document.querySelector("#produtos")
        let divPai = document.createElement("div")
        divPai.classList.add("item");
        divPai.classList.add("itemclass")
            console.log(divPai)
               criarImagem(divPai,indObject)
               criarTexto(divPai,indObject)
                contProdutos.appendChild(divPai)

   } 
  }
function pesquisar(){
   
                 const search= document.querySelector("#search")
             const button=document.querySelector("#bot")
         let tituloDaPagina = document.querySelector('h1')
             
button.addEventListener("click",function(){
    let titles = document.querySelectorAll(".titulo")
    tituloDaPagina.innerHTML=search.value
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
}catch{
        console.error("error")
    }
     

}
  chamarBancoDeProdutos()



        