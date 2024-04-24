class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
constructor(head)
{
    this.head=null;
}

    append(value){
        let node = new Node(value);
        let lastNode = this.tail();
        lastNode.next=node;
    }

    prepend(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    head(){
        if(this.head!=null)
        {return this.head;}
    }

    tail(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    at(index){
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index){
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    pop(){
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return current;
            }
            current = current.next;
        }
        return null;
    }

    toString(){
        let str = '';
        let current = this.head;
        while(current){
            console.log(current);
            str += `(${current.value}) --> `;
            current = current.next;
        }
        str += 'null';
        return str;
    }

}


const list = new LinkedList();


list.prepend(2);
list.append(21);

list.append(3);

// console.log(list.size())


console.log("Linked List:",list.toString());

// console.log(list.find(6))