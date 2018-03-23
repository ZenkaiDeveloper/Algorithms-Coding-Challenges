//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i =0; i<arr1.length;i++){
    if(arr2.indexOf(arr1[i]) === -1){ //Just to check if the properrty exists
      newArr.push(arr1[i]);
    }
  }
  // Only did half of the work. Now have to check for arr1, im just going to do the same thing as above
  for (var j=0;j<arr2.length; j++){
    if(arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// Another more functional way to solev this problem is by using the filter method.
function diffArray2 (arr1, arr2){
  var combined = arr1.concat(arr2);
  return combined.filter(function(num){
    if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1){
      return num;
    }
  });
}
