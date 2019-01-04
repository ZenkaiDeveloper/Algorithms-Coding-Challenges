class Node{
  constructor(value){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    const lastNode = this.tail;
    if (this.length === 0) {
      return undefined;
    }else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.tail = lastNode.prev;
      //cutting loose ends
      this.tail.next = null;
      lastNode.prev = null;
    }
    this.length--;
    return lastNode;
  }

  shift(){
    const firstNode = this.head;
    if (!this.head) {
      return undefined;
    }else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }else{
      this.head = firstNode.next;
      this.head.prev = null;
      this.firstNode.next = null;
    }
    this.length--;
    return this.firstNode;
  }

  unshift(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      const currentHead = this.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){
    if (index < 0 || index >= this.length) {
      return null;
    }else if (index <= Math.floor(this.length/2)) {
      let counter = 0;
      let current = this.head;
      while(counter !== index){
        current = current.next;
        counter++;
      }
      return current;
    }else{
      let counter = this.length-1;
      let current = this.tail;
      while(counter !== index){
        current = current.previous;
        counter--;
      }
      return current;
    }
  }

  set(index,value){
    let currentVal = this.get(index);
    if (currentVal) {
      this.get(index).val = value;
      return true;
    }
    return false;
  }

  insert(index, value){
    const newNode = new Node(value);
    if (index < 0 || index >= this.length) {
      return null;
    }else if (index === 0) {
      return !!this.unshift(value);
    }else if (index === this.length) {
      return !!this.push(value);
    }else{
      let pre = this.get(index - 1);
      let temp = pre.next;
      pre.next = newNode;
      newNode.next = temp;
      temp.prev = newNode;
      newNode.prev = pre;
    }
    this.length++;
    return true;
  }

  remove(index){
    if (index < 0 || index >= this.length) {
      return null;
    }else if (index === 0) {
      return !!this.shift(value);
    }else if (index === this.length-1) {
      return !!this.pop(value);
    }
    let removedNode = this.get(index);
    else{
      let beforeNode = removedNode.prev;
      let afterNode = removedNode.next;
      removedNode.next = null;
      removedNode.prev = null;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
    }
    this.length--;
    return removedNode;
  }


}
