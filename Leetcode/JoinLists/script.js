
class node{
    constructor(data){
        this.data = data;
        this.next= null;
    }
} class LinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        const newnode= new node(data);
        if(this.head===null){
            this.head=newnode;
            return
        } 
        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next= newnode;
    }
}
let lista3= new LinkedList()

 let lista1 = new LinkedList()
 lista1.append(2)
 lista1.append(4)
 lista1.append(9)

 console.log(lista1.head.data)
 console.log(lista1.head.next.data)
 console.log(lista1.head.next.next.data)

  let lista2 = new LinkedList()
  lista2.append(2)
  lista2.append(5)
  lista2.append(8)

  

   console.log(lista2.head.data)
  console.log(lista2.head.next.data)
  console.log(lista2.head.next.next.data)

  let array1=[]
  array1.push(lista1.head.data)
  array1.push(lista1.head.next.data)
  array1.push(lista1.head.next.next.data)
  console.log(array1)

  let array2=[]
  array2.push(lista2.head.data)
  array2.push(lista2.head.next.data)
  array2.push(lista2.head.next.next.data)
  console.log(array2)
 let array3 = [...array1, ...array2];
  array3.sort((a, b) => a - b);
  console.log(array3)
  for( let item of array3){
   lista3.append(item)
  }
console.log(lista3.head.data)
console.log(lista3.head.next.data)
console.log(lista3.head.next.next.data)
console.log(lista3.head.next.next.next.data)
console.log(lista3.head.next.next.next.next.data)
console.log(lista3.head.next.next.next.next.next.data)