// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's coresponding value squared in the second array. The frequency must be the same. Order does not matter

// Initial Approach, bad because it has o(n^2) time complexity (nested loop)
function same(arr1, arr2){
  if (arr.length !== arr2.length) {
    return false
  }
  for (num of arr1) {
    if (!arr2.includes(num*num)) {
      return false
    }
    arr2.splice(arr2.indexOf(arr[i]*arr[i]), 1)
  }
  return true
}
same([1,2,5,6], [1,4,25,36]) //true

// Better solution since time complexity is o(n), looping twice instead of nesting the loops. Objects make it faster because checking if a value/key exist in an object is constant time which is diffrent from checking if a value exits in an array which is considered o(n) time.
function refactoredSame(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false
  }
  const obj1 = {};
  const obj2= {};
  for(const num of arr1){
    obj1[num] =  obj1[num]+1 || 1
  }
  for(const num of arr2){
    obj2[num] = obj2[num] + 1 || 1
  }
  for(const key in obj1){
    if (!(obj1[key] === obj2[key*key])) {
      return false
    }
  }
  return true
}
refactoredSame([1,2,5,6], [1,4,25,36])

// Check for valid anagram. A pair of words are anagrams if they can be scrambled to match each other.
function isAnagram(word1, word2){
  if (word1.length !== word2.length) {
    return false
  }
  let obj = {};
  let length = word1.length
  for(let i=0;i<length;i++){
    obj[word1[i]] = obj[word1[i]] + 1 || 1
  }
  for(let i=0;i<length; i++){
    if (!obj[word2[i]]) {
      return false
    }
    obj[word2[i]] -= 1
  }
  return true
}

isAnagram('racecar', 'acerrac')
