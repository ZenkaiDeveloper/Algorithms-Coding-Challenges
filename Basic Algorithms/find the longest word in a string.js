// Return the length of the longest word in the provided sentence.

// Your response should be a number

function findLongestWord(string){
  var word = string.split(" ");
  var longestWord = "";
  for (var i = 0; i < word.length; i++){
    if(longestWord.length < word[i].length){
      longestWord = word[i];
    }
  }
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");