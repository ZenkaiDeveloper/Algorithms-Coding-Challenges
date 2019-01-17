const { Node, BinarySearchTree } = require('./BinarySearchTree')
// Calling the breadth first search from our binary tree class
let tree = new BinarySearchTree();

test('input of 8,10,15,3,6,20 to return array [10,6,15,3,8,20]', () => {
  tree.insert(10);
  tree.insert(8);
  tree.insert(6);
  tree.insert(15);
  tree.insert(20);
  tree.insert(3);

  expect(tree.BFS()).toMatchObject([10,8,15,6,20,3]);
})
