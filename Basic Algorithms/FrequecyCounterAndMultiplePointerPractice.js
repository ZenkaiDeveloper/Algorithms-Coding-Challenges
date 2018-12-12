// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2){
  let obj1 = {};
  let obj2 = {};
  let str1 = num1+"";
  let str2 = num2+"";
  if (str1.length !== str2.length) {
    return false;
  }
  str1.split("").forEach(num=>{
    obj1[num] = obj1[num]+1 || 1;
  });
  str2.split("").forEach(num => {
    obj2[num] = obj2[num]+1 || 1;
  });
  for(let key in obj1){
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

//Write a funtion called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length-1;
  while (left < right) {
    let average = sortedArr[left]+sortedArr[right]/2
    if (average > target) {
      right--
    }else if (average < target) {
      left++
    }else if (average === target) {
      return true
    }
  }
  return false
}

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a susequence of the characters in the second string. In other words, the function should check wether thr characters in the first string appear somewhere in the second string, without their order changing.

// function isSubsequence(str1, str2){
//   let obj1 = {};
//   let arr = [];
//   for(let value in str1.split("")){
//     obj1[value] = obj[value]+1 || 1;
//   }
//   for(let i=0;i<str2.length;i++){
//     if (obj1[str2[i]]) {
//       arr.push(str2[i])
//     }
//   }
//   for(let i=0;i<arr.length;i++){
//     if (arr[i] !== str1.split("")[i]) {
//       return false
//     }
//   }
//
//   return true
//
// }

function isSubsequence(str1, str2){
  let obj = {};
  arr1 = str1.split("");
  arr2 = str2.split("");
  for(let letter of str1){
    obj[letter] = obj[letter] + 1 || 1;
  }
  let pointer1 = 0;
  let pointer2 = 0;
  
}
