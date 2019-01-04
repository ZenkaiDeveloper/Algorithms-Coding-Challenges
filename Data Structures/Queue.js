class Node {
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

//FIFO insertion/removal O(1) constant time
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //add to the end
  enqueue(value){
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  //remove from front instead of end constant vs. linear time
  dequeue(){
    if (!this.first) {
      return null;
    }else if (this.size === 1) {
      this.first = null;
      this.last = null;
    }else{
      let oldStart = this.first.next;
      this.first.next = null;
      this.first = oldStart;
    }
    this.size--;
    return this;
  }
}
