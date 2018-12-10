//Write a function called sumZero which accepts a sorted array of integers
// The function should find the first pair where the sume is 0.
// Return an array that includes both values that the sum to zero or undefined if a pair does not exist

// Naive Approach, since there is a nested for loop time complexity o(n).
function sumZero(sortedArr){
  let arr = [];
  for(let i=0; i<sortedArr.length; i++){
    for(let j=i+1; j<sortedArr.length; j++){
      if (sortedArr[i] + sortedArr[j] === 0) {
        arr.push(sortedArr[i], sortedArr[j]);
        return arr
      }
    }
  }
}
sumZero([-3,-2,-1,0,1,2,3])
/////////////////////////////////////////////////////////////////////////////////////////////
// Refactored Solution, time is o(n) because reading a single value from an array with an index is constant time.
function refactoredSumZero(sortedArr){
  let arr = []
  let leftPointer = 0;
  let rightPointer = sortedArr.length-1;
  while (rightPointer > leftPointer) {
    let sum = sortedArr[leftPointer] + sortedArr[rightPointer];
    if (sum === 0) {
      arr.push(sortedArr[leftPointer], sortedArr[rightPointer]);
      return arr;
    }else if (sum < 0) {
      leftPointer ++
    }else if (sum > 0){
      rightPointer--
    }
  }
}
refactoredSumZero([-50,-34,-32,-23,-12,13,23,44,88])
//////////////////////////////////////////////////////////////////////////////////////
//Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Using Frequency counter
function fcCountUniqueValues(sortedArr){
  let obj = {};
  for(let num of sortedArr){
    obj[num] = obj[num] + 1 || 1
  }
  return Object.keys(obj).length;
}
fcCountUniqueValues([1,1,1,1,1,1,1,1,2,2,2,5])
//////////////////////////////////////////////////////////////////////////////////////////
// Multiple Pointers Solution
function countUniqueValues(sortedArr){
  let counter = 1;
  let left = 0;
  let scout = 1;
  if (sortedArr.length === 0) {
    return 0
  }
  while(scout < sortedArr.length){
    if (sortedArr[scout] === sortedArr[left]){
      scout++;
    }
    else if(sortedArr[left] < sortedArr[scout]){
      left = scout;
      scout++;
      counter++;
    }
  }
  return counter
}
countUniqueValues([1,1,1,1,1,1,1,1,2,2,3,5])
