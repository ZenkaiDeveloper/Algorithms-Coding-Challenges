function sumTwoSmallestNumbers(numbers) {  
  var first = numbers.sort( (a, b) => {
    return a-b;
    });
  return first[1] + first[0];
};
