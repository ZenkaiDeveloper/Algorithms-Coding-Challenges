// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

var vowels = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  var consonants = [];
  if(vowels.indexOf(str[0]) !== -1){
    return str + "way";
  } else{
    for(var i=0;i<str.length;i++){
      if(vowels.indexOf(str[i]) !== -1){
        return str.split("").slice(i).join("") + str.split("").splice(0,i).join("") + "ay";
      }
    }
  }
  return consonants;
}

translatePigLatin("algebra");