const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  //split the array into halves recursivley until left with one or no elements.
  let mid = Math.floor(arr.length/2);
  let right = mergeSort(arr.slice(mid));
  let left = mergeSort(arr.slice(0, mid));
  // merging begins
  let i=0;
  let j=0;
  let result = [];
  //
  while(i<right.length && j<left.length){
    if (right[i] < left[j]) {
      result.push(right[i]);
      i++;
    }else{
      result.push(left[j]);
      j++;
    }
  }
  // Push the rest of the leftover/longer array into result
  while(i<right.length){
    result.push(right[i]);
    i++;
  }
  while(j<left.length){
    result.push(left[j]);
    j++;
  }
  return result;
}
