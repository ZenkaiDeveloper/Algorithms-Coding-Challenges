// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.


function sumAll(arr) {
  highestNum=arr.reduce(function(a,b){
    return Math.max(a,b);
  });
  lowestNum = arr.reduce(function(a,b){
    return Math.min(a,b);
  });
  var sum = 0;
  for (var i=highestNum; i>=lowestNum; i--){
    sum += i;
  }
  return sum;
}

sumAll([2, 4,]);