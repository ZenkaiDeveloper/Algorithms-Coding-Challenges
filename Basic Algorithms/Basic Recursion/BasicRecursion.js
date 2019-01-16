//Power
//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow().

// let power = (base, exp) => {
//   if(exp === 0){
//       return 1;
//   }
//   let result = base;
//   let counter=1;
//   let multiply = (num, acc) =>{
//     counter++;
//     result = num*acc;
//   };
//   while(counter < exp){
//     multiply(base,result);
//   }
//   return result;
// }; wtf...

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

//Factorial
//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.
let factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num-1)
}

//product of array
// Write a function called productOfArray which takes in an array of numbers and returns the product of all of them.

let productOfArray = (arr) => {
  if (arr.length) {
    return arr[0]* productOfArray(arr.splice(1));
  }
  return 1;
};

//Recursive Range
//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
let recursiveRange = (num) => {
  if (num === 0) {
    return num;
  }
  return num+recursiveRange(num-1);
};

// Fibonacci
// Write a recursive function called fib which accepts a number and return the nth number in the fibonacci sequence.
// let fib = (number) => {
//   let arr = [1,1];
//   let length = arr.length;
//   let fibbonize = () => {
//     arr.push(arr[arr.length-1] + arr[arr.length-2])
//   }
//   while (length < number) {
//     fibbonize()
//   }
//   return arr[arr.length-1]
// } wtf...

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
  }


module.exports = { fib, recursiveRange, factorial, productOfArray, power };
