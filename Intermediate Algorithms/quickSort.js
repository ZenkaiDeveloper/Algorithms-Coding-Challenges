// const quickSort = (arr) => {
//
// }
//
// const pivot = (arr, start=0,end=arr.length+1){
//   let pivotNum = arr[start];
//   let swapIndex = start;
//   for(let i= start + 1;i<arr.length;i++){
//     if(arr[i] < pivotNum){
//       swapIndex++
//       [arr[swapIndex], arr[i]] = [arr[i],arr[swapIndex]];
//     }
//   }
//   [arr[start], arr[swapIndex]] = [arr[swapIndex],arr[start]];
//   return swapIndex
// }


var quickSort = function(arr) {
  var sorted = [];
  var left = [];
  var right = [];

  if (arr && arr.length > 1) {
    // 1. Select a random element.
    var mid = arr[0];

    // 2. Place all numbers less in the left array, greater in the right array.
    for (var i=1; i<arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }

    // 3. If left or right have more than 1 item, repeat above steps.
    left = quickSort(left);
    right = quickSort(right);

    // 4. Finally, combine left + mid + right.
    left.push(mid);
    sorted = left.concat(right);
  }
  else if (arr[0] !== undefined) {
    // One or no numbers, just return it.
    sorted.push(arr[0]);
  }

  return sorted;
}
