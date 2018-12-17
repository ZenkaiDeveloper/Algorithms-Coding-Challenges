// Naive but isnt bad. indexof in javascript uses linear search. o(n)
let linearSearch = (arr, value) => {
  for(let i=0;i<arr.length;i++){
    if (arr[i] === value) {
      return i
    }
  }
  return -1;
}
