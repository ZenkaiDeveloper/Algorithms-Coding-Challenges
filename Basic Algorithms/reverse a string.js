//Reverse a String
//Most Practical way.


function revString1(str1){
  console.log(str1.split("").reverse().join(""));
}

revString1("Bruce Lee");

/////////////////////////////////////////////////////////////////////////////

//Using a for loop, this can be done backwards so the reverse method does not have to be used.
function revString2(str2){
  var arr1 = [];
  for(var i=0;i<str2.length;i++){
    arr1.push(str2[i]);
  }
  console.log(arr1.reverse().join("")); 
}

revString2("Hello");

/////////////////////////////////////////////////////////////////////////////

// Using a for loop again, but going the other way
function revString3(str3){
  var s = "";
  for (var i = str3.length - 1; i>= 0;i--){
    s += str3[i];
  }
  console.log(s);
}
revString3("Will this work?");

