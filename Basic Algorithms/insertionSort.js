//Works well for nearly sorted data. Good for online data, which allows you to sort data as it comes in live.

const insertionSort = (arr) => {
  for(var i = 1;i<arr.length;i++){
    let currentValue = arr[i];
    for(var j=i-1; j>=0 && arr[j] > currentValue;j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }
  return arr
}
