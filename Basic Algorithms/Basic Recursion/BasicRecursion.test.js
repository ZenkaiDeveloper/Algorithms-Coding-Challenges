const { fib, recursiveRange, factorial, productOfArray, power }  = require('./BasicRecursion');

test('input 10 should equal 55', () => {
  expect(fib(10)).toBe(55);
});

test('input 2 equal 3', () => {
  expect(fib(2)).toBe(1);
});

test('recursiveRange(3) to output 6.', () => {
  expect(recursiveRange(3)).toBe(6);
})

test('recursiveRange(6) to output 21.', () => {
  expect(recursiveRange(6)).toBe(21);
})

test('expect 5 factorial to equal 120', () => {
  expect(factorial(5)).toBe(120);
})

test('expect 10 factorial to equal 3628800', () => {
  expect(factorial(10)).toBe(3628800);
})

test("expect the product of an array with a single zero to equal zero", () => {
  expect(productOfArray([1,2,3,4,5,0,88,211])).toBe(0);
})

test("expect the product of [10,2,9] to equal 180", () => {
  expect(productOfArray([10,2,9])).toBe(180);
})

test("expect the base of 3 to the power of 2 to equal 9", () => {
  expect(power(3,2)).toBe(9);
})

test("expect the base of 888 to the power of 0 to equal 1", () => {
  expect(power(888,0)).toBe(1);
})
