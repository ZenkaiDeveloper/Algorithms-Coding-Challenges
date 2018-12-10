// Sliding window pattern involves creating a window which can either be an array or number from one position to another Depending on a certain condition, the window either increases or closes and a new window is created. It is useful for keeping track of subsets of data in an array.

//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//Brute force o(n^2)
function bfMaxSubArraySum (arr, num){
  if (num > arr.length) {
    return null
  }
  let maxValue = arr[0];
  for(let i=0;i<arr.length + 1 - num; i++){
    let total = 0;
    for(let j=0;j<num;j++){
      total += arr[i+j]
    }
    maxValue = Math.max(maxValue, total)
  }
  return maxValue

}
bfMaxSubArraySum([1,2,3,4,5,6,7], 3); //18
////////////////////////////////////////////////////////////////////////////////////
// Window Sliding Approach. Better since only two values are changing and you are just adding the delta between the two changed values to your old temporary value. o(n)
function maxSubArraySum (arr, num) {
  if (num > arr.length) {
    return null
  }
  let maxValue = arr[0];
  let tempValue = 0;
  for(var i=0;i<num;i++){
    tempValue += arr[i]
  }
  for(let i=num;i<arr.length;i++){
    tempValue += (arr[i] - arr[i-num]);
    maxValue = Math.max(maxValue, tempValue)
  }
  return maxValue;
}
maxSubArraySum([1,2,3,4,5,6,7], 3);
