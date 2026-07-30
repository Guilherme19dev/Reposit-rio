
const buttons =document.getElementById("btn")
console.log(buttons)
buttons.addEventListener("click",function(){
    let resposta = document.querySelector("#inserir")
    let resposta2 = document.querySelector("#digitado")
    let resultado=document.querySelector("#final")
    resposta=resposta.value.toString()
    resposta2=resposta2.value.toString()
    
class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
    class LinkedList {
            constructor(){
            this.head=null;
        }
        append(data){
            const newnode= new node(data);
                if(this.head===null){
                    this.head=newnode;
                    return;
                }
                    let current = this.head;
                        while(current.next !== null){
                        current = current.next
                    }
                    current.next = newnode;
        }
}


function primeirosValores(){
const minhaLista = new LinkedList();
minhaLista.append(resposta[0]);
minhaLista.append(resposta[1]);
minhaLista.append(resposta[2]);

 let llinked=[]
     llinked.push(minhaLista.head.data)
     llinked.push(minhaLista.head.next.data)
     llinked.push(minhaLista.head.next.next.data)
     llinked.reverse()
     llinked=llinked.join("")
     llinked=parseInt(llinked)

    return llinked
}
function segundosValores(){
    const minhaLista = new LinkedList()
    minhaLista.append(resposta2[0]);
    minhaLista.append(resposta2[1]);
    minhaLista.append(resposta2[2]);
    
    let llinked=[]
     llinked.push(minhaLista.head.data)
     llinked.push(minhaLista.head.next.data)
     llinked.push(minhaLista.head.next.next.data)
     llinked.reverse()
     llinked=llinked.join("")
     llinked=parseInt(llinked)

    return llinked
}
resultado.value=(segundosValores()+primeirosValores())
})
