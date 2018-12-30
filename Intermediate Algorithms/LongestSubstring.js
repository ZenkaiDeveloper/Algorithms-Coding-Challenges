//Given a string, find the length of the longest substring without repeating characters.
let lengthOfLongestSubstring = (s) => {
  let obj = {};
  let left = 0;
  let longest = 0;

  for(let i=0;i<s.length;i++){
    if (obj[s[i]]) {
      left = Math.max(left, obj[s[i]])
    }
    longest = Math.max(longest, i - left + 1);
    obj[s[i]] = i+1;
  }

  return longest;
}
