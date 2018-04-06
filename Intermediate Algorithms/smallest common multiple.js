// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
var biggerNum = 0;
  var smallerNum=0;
  if(arr[0] > arr[1]){
    biggerNum = arr[0];
    smallerNum = arr[1];
  }else{
    biggerNum = arr[1];
    smallerNum = arr[0];
  }
  var multiple = biggerNum;
  for(var i = smallerNum; i<=biggerNum;i++){
    if(multiple % i !== 0){
      multiple += biggerNum;
      i = smallerNum;
    }
  }
  return multiple;
}


smallestCommons([1,5]);