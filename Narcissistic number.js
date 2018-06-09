//Your code must return true or false depending upon whether the given number is a Narcissistic number.
function narcissistic(value) {
  let l = value.toString().length;
  let arr = [];
  for (let i=0;i<l;i++){
   arr.push(Number(value.toString()[i]));
  }
  let powered = arr.map(function(e,index,arr){
    return Math.pow(e,l);
  });
  let reduced = powered.reduce(function(a,b){
    return a+b;
  });
  if(reduced === value){
    return true;
  }
  else{
    return false;
  }
}
narcissistic( 153 );
