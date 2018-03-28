function uniteUnique(arr) {
  var args = Array.from(arguments);
  var merged = [].concat.apply([], args);
  var newArr =[];
  for (var i=0;i<merged.length;i++){
    if (newArr.indexOf(merged[i]) === -1){
      newArr.push(merged[i]);
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);