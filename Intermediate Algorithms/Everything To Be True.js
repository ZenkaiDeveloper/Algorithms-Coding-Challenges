// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  var arr =[];
  for(let i=0;i<collection.length;i++){
    if(collection[i][pre]){
      arr.push(collection[i][pre]);
    }
  }
  if(arr.length !== collection.length){
    return false;
  }else{
    return true;
  }
}
