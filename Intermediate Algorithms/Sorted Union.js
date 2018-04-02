// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

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