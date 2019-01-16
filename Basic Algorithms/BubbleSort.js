const bubbleSort = (arr) => {
  for(var i=arr.length;i>0;i--){
    let noSwap = true;
    for(var j=0;j<i-1;j++){
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwap = false
      }
    }
    if (noSwap) break;
  }
  return arr
}