function binarySearch(sortedArr, target){
  let left = 0;
  let right = sortedArr.length-1;
  let mid = Math.floor(right+left/2);
  while(right >= left){
    mid = Math.floor(right+left/2);
    if(target < sortedArr[mid]){
      right = mid-1;
    }else if (target > sortedArr[mid]) {
      left = mid+1;
    }else if (sortedArr[mid] === target) {
      return mid;
    }
  }
  return -1;
}
