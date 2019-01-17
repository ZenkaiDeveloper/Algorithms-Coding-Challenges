const { SinglyLinkedList, Node } = require('./SinglyLinkedList');

let list = new SinglyLinkedList();

test('If the list has one value, expect the head to be that value', () => {
  list.push(10);
  expect(list.head.val).toBe(10);
})

test('If the list has one value, expect the tail to be that value', () => {
  expect(list.tail.val).toBe(10);
})

test('Singly linked list can add on by pushing.', () => {
  list.push(32);
  expect(list.tail.val).toBe(32);
})
