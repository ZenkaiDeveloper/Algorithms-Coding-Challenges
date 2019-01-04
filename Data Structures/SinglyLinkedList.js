class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length=0;
    this.head=null;
    this.tail=null;
  }

// add on to the end of the list
  push(data){
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

// Take off the value at the end of the list.
  pop(){
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let pre = current;
    while(current.next){
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail=null;
    }
    return current;
  }

// delete the current head
  shift(){
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

//Add on a value to the front/head of the list.
  unshift(data){
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

//Get the value at a specific index
  get(index){
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while(counter < index){
      current = current.next;
      counter++;
    }
    return current
  }

  // to set a value to a certain index

  set(index, value){
    let previous = this.get(index);
    if (!previous) {
      return false;
    }
    previous.val = value;
    return true;
  }

  insert(index, value){
    if (index < 0 || index > this.length) {
      return false;
    }else if(index === 0){
      return !!this.unshift(value);
    }else if (index === this.length) {
      return !!this.push(value);
    }
    let newNode = new Node(value);
    let pre = this.get(index-1);
    let temp = pre.next;

    pre.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index, value){
    if (index<0 || index>=this.length) {
      return false
    }else if (index === 0) {
      return !!this.shift()
    }else if (index === this.length-1) {
      return !!this.pop()
    }
    let preNode = this.get(index-1);
    let removedNode = preNode.next;
    preNode.next = removedNode.next;
    this.length--;
    return true;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for(let i=0;i<this.length;i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }


}

let list = new SinglyLinkedList()
list.push("Hi")
list.push("how")
list.push("are")

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
