
class Node{
    value = null;
    nextNode = null; 
    constructor(value){
     this.value = value;
    }
 
 }

class LinkedList{
    head = null;
    constructor(head){
        this.head = head;
    }

    append(value){
        let node = this.head;
        while(node.nextNode !== null){
            node = node.nextNode;
        }
        node.nextNode = new Node(value);
    }

    prepend(value){
        if(this.head === null){
            this.head = new Node(value);
        }else{
            let prevFirst = this.head;
            let newFirst = new Node(value);
            this.head = newFirst;
            newFirst.nextNode = prevFirst;
        }
    }
    
    size(){
        let first = this.head;
        let size = 1;
        while(first.nextNode !== null){
            first = first.nextNode;
            size++; 
        }
        return size;
    }

    tail(){
        let node = this.head;
        while(node.nextNode !== null){
            node = node.nextNode;
        }
        return node;
    }

    at(index){
        let node = this.head;
        let currentIndex = 0;
        while(node.nextNode !== null){
            if (index === currentIndex) return node
            node = node.nextNode;
            currentIndex++;
        }
    }
    pop(){
        let prev;
        let current = this.head;
        while(current.nextNode !== null){
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
    }
    contains(value){
        let node = this.head;
        while(node !== null){
            if(value === node.value){
                return true
            }else{
                node = node.nextNode;
            }
        }
        return false;
    }

    find(value){
        let node = this.head;
        let index = 0;
        while(node !== null){
            if(value === node.value) return index
            node = node.nextNode
            index++;
        }
        return null;
    }
    toString(){
        let node = this.head;
        let text = "";
        while(node !== null){
            text += "(" + node.value + ") -> ";
            node = node.nextNode;
        }
        text += "null";
        return text;
    }

    insertAt(value,index){
        let current = this.head;
        let next = current.nextNode;
        let i = 0;
        if(index < 0){
            console-log("Imposible index");
        }else if(index === 0){
            this.prepend(value);
        }else{
            while(current !== null && next !== null){
                let n = new Node(value);
                if(next === null){
                    current.nextNode = n;
                }else{
                    if(index === i){
                        current.nextNode = n;
                        n.nextNode = next;
                    }
                }
                current = next;
                next = next.nextNode;
                i++;
            }
        }

    }

    removeAt(index){
        let current = this.head;
        let next = current.nextNode;
        let i = 0;

        if(index < 0){
            console-log("Imposible index");
        }else if(index === 0){
            this.head = next;
        }else{
            while(current !== null && next !== null){
                i++;
                if(index === i){
                    next = next.nextNode;
                    current.nextNode = next;
                }else{
                    current = next;
                    next = next.nextNode;
                }
            }
        }
    }
}





let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
node4.nextNode = node5;
node5.nextNode = node6;
node6.nextNode = node7;


let list = new LinkedList(node1);

console.log("Head : ")
console.log(list.head)
console.log("\nSize : ")
console.log(list.size())
console.log("\nElements : ")
console.log(list.toString())
console.log("\nInsert 15 at index 3 : ")
list.insertAt(15,3)
console.log("Elements : ")
console.log(list.toString())
console.log("\nRemove element at index 1 : ")
list.removeAt(1)
console.log("Elements : ")
console.log(list.toString())