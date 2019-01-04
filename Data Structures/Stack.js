class Node {
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

//LIFO, insertion/removal O(1) constant time
class Stack {
  constructor(){
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  push(value){
    const newNode = new Node(value);
    let start = this.start;
    if (!this.start) {
      this.start = newNode;
      this.end = this.start;
    }else{
      this.start = newNode;
      newNode.next = start;
    }
    return ++this.size;
  }
  pop(){
    let temp = this.first;
    if (this.size === 0) {
      return null;
    }else if (this.size === 1) {
      this.start = null;
      this.end = null;
    }else{
      this.start = this.start.next;
      this.start.next = null;
    }
    this.size--;
    return temp.val;
  }
}
