// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

function palindrome(string){
  lowerCase = string.toLowerCase().replace(/[\W_]/g, "");
  console.log(lowerCase);
  revString = lowerCase.split("").reverse().join("");
  console.log(revString);
    if(revString === lowerCase){
      return true;
    } else{
      return false;
    }
}
palindrome("raceCar**racecar");