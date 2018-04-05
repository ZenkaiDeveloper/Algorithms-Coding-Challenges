//Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  var numberArr = [];
  for (var i=2;i<=num;i++){
    numberArr.push(i);
  }
  var primedArr = numberArr.filter(function(element, index, array){
    for(var j=0;j<index;j++){
      if(element % array[j] === 0 ){
        return false;
      }
    }
    return true;
  });
  return primedArr.reduce((a,b)=>{return a+b});
}

sumPrimes(10);


  

