class Node {
  constructor(value){
    this.value = value,
    this.right = null,
    this.left = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    let temp = this.root;
    if (!this.root) {
      this.root = newNode;
      return this;
    }else {
    while(temp){
      if (value === temp.value) {
        return undefined;
      }
      else if (value < temp.value) {
        if(!temp.left){
          temp.left = newNode;
          return this;
        }else{
          temp = temp.left;
        }
      }else if (value > temp.value) {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }else{
          temp = temp.right
        }
      }
    }

    }
  }


  find(value){
    let current = this.root;
    if (!this.root) {
      return null;
    }else if (this.root.value === value) {
      return true;
    }else if (current.value > value) {
      while (current.left) {
        if (value === current.left.value) {
          return true
        }else{
          current = current.left;
        }
      }
      return false;
    }else if (current.value < value) {
      while (current.right) {
        if (current.right.value === value) {
          return true;
        }else{
          current = current.right;
        }
      }
      return false
    }
  }

  BFS(){
    let node = this.root;
    const data = [];
    const queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
}

module.exports = { Node, BinarySearchTree };
