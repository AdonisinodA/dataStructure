class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}





class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    addToFront(value){
        const newNode = new Node(value)
        newNode.next = this.head

        if(this.head){
            this.head.prev = newNode
        }else{
            this.tail = newNode
        }
        this.head = newNode
    }


    addToEnd(value){
        const newNode = new Node(value)
        newNode.prev = this.tail

        if(this.tail){
            this.tail.next = newNode
        }else{
            this.head = newNode
        }
        this.tail = newNode
    }



    removeToFront(){
        if(!this.head){
            return null
        }
        const removedNode = this.head.value
        this.head = this.head.next

        if(this.head){
            this.head.prev = null
        }else{
            this.tail =null
        }

        return removedNode
    }



    removeToEnd(){
        if(!this.tail){
            return null
        }
        const removedNode = this.tail.value

        this.tail = this.tail.prev
        if(this.tail){
            this.tail.next = null
        }else{
            this.head = null
        }


        return removedNode
    }


}


const list = new DoublyLinkedList();

// Teste 1: Adicionar no início
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);

// Teste 2: Adicionar no final
list.addToEnd(40);
list.addToEnd(50);

// Teste 3: Remover do início
console.log(list.removeToFront()); // Esperado: 30
console.log(list.removeToFront()); // Esperado: 20

// Teste 4: Remover do final
console.log(list.removeToEnd()); // Esperado: 50
console.log(list.removeToEnd()); // Esperado: 40

// Teste 5: Remover até a lista ficar vazia
console.log(list.removeToFront()); // Esperado: 10
console.log(list.removeToFront()); // Esperado: null
console.log(list.removeToEnd());   // Esperado: null

// Teste 6: Adicionar e remover um único nó
list.addToFront(100);
console.log(list.removeToFront()); // Esperado: 100
console.log(list.head); // Esperado: null
console.log(list.tail); // Esperado: null
