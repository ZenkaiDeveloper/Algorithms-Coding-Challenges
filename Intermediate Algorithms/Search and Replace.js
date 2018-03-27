function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");




function myReplace(str, before, after){
  var arr = str.split(" ");
  if(before[0] === before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.slice(1);
  }
  for (var i=0;i<arr.length; i++){
    if (arr[i] === before){
      arr[i] = after;
    }
  }
  return arr.join(" ");
}

 myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");