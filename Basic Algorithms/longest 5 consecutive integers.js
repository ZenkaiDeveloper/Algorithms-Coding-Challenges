function solution(digits){
  var arr =[];
  for(var i=0;i<digits.length;i++){
    arr.push(digits[i]+digits[i+1]+digits[i+2]+digits[i+3]+digits[i+4]);
  }
  return arr.map((e) => Number(e)).filter((e) => e).sort((a,b) => b-a)[0];
}
solution("123456789");
