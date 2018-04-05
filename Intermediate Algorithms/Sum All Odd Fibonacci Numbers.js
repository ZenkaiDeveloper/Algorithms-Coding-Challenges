// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
 //The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 function sumFibs(num) {
  var arr = [1,1];
  // have an array of fibonacci nums that can be filtered;
  for (var i=2; i<num;i++){
    arr[i] = arr[i -1] + arr[i-2];
  }
  var oddArr = arr.filter((arrNums)=>{
    return arrNums%2 ===1 && arrNums <= num;
  });
  
  return oddArr.reduce((acc, curr)=> acc + curr);
}

sumFibs(10);