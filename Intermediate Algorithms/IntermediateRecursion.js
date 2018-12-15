//Reverse String
// Write a recursive function called reverse that reverses a string.
let reverse = (str) => {
  if (str.length <= 1) {
    return str
  }
  let first = str[0];
  return reverse(str.slice(1)) + first
}

//isPalindrome
// Write a recursive function called isPalindrome that checks if a string is spelled the same forwards as backwards.

let isPalindrome = (str) => {
  if(str[0] !== str[str.length-1]){
    return false;
  }
  if (str.length <= 1) {
    return true;
  }
  return isPalindrome(str.slice(1,str.length-1));
};

//someRecursive
// Write a recursive function called someRecursive that takes in an array and a callback. The function returns true if a single value returns true if a single value in the array returns true. Otherwise the function returns false.
let someRecursive = (arr, callback) => {
  if(arr.length === 0){
    return false;
  }
  if(callback(arr[0])){
    return true;
  }
  return someRecursive(arr.slice(1),callback);
};

//Flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}
