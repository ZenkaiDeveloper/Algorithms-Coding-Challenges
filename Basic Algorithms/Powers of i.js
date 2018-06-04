 // write a function pofi that returns i to the power of a given non-negative integer in its simplest form as a string (answer may contain i).

//  function pofi(n){
//   if (Math.floor(n%4) >= 1){
//     n = Math.floor(n%4);
//   }
//   if(n === 0){
//     return "1";
//   }
//   else if (n%4 === 0){
//     return "1";
//   }
//   else if(n%3 === 0){
//     return "-i";
//   }
//   else if(n%2 === 0){
//     return "-1";
//   }
//   else{
//     return "i";
//   }
//
// }

function pofi(n){
  switch (n%4) {
    case 0: return '1'
    case 1: return 'i'
    case 2: return '-1'
    case 3: return '-i'
  }
}
