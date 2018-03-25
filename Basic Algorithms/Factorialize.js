//OOP
function factorialize(num){
  var result = 1;
  for(var i = 1; i <= num; i++){
  result = result*i;
  }
  return result;
}
factorialize(5);



// Recursion
function factorialize1(num1){
  if (num1 > 1){
    return num1 * factorialize1(num1-1);
  } else{
    return 1;
  }
}
factorialize1();