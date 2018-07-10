// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
//
// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//
// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

function listSquared(m, n) {
  function divisorSquaredSum(num){
  var arr = [];
  var quotient = 0;
  for(let i=0;i<=num;i++){
    quotient = num/i;

    if(quotient === Math.floor(quotient)){
      arr.push(i*i)
    }
  }
 return arr.reduce(function(curr,acc){
    return curr+acc;
  });
}
  let divisorSquare = [];
  let organSquare= [];
  let squareRootIntCheck = function(e){
    return Math.floor(Math.sqrt(divisorSquaredSum(e))) * Math.floor(Math.sqrt(divisorSquaredSum(e)))
  }
  for(let i=m;i<=n;i++){
    if(squareRootIntCheck(i) === divisorSquaredSum(i)){
      divisorSquare.push(i);
      divisorSquare.push(divisorSquaredSum(i));
    }
  }
  while(divisorSquare.length > 0){
    organSquare.push(divisorSquare.splice(0,2))
  }
  return organSquare;
}

listSquared(42, 250) //--> [[42, 2500], [246, 84100]]
