const { Node, BinarySearchTree } = require('./BinarySearchTree');

let tree = new BinarySearchTree();

test('expect BST with values inserted of 10,6,15,3,8, and 20 to do a preordered DSF to return [10,6,3,8,15,20]', () => {
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);
  expect(tree.DFSPreOrder()).toMatchObject([10,6,3,8,15,20]);
})
