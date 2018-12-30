const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

const selectionSort = (arr) => {
  for(let index in arr){
    let min = index;
    for(let i=index+1;i<arr.length;i++){
      if (arr[min] > arr[i]) {
        min = i;
      }
    }
    if (index !== min) swap(arr, index, min);

  }
  return arr;
}
