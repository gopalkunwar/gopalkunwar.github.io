"use strict";
//sum() and a function multiply()


function sum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

function multiply(arr) {
  const reducer = (sum, val) => sum * val;
  const initialValue = 1;
  return arr.reduce(reducer, initialValue);
}


function reverse(str) {
  return str.split("").reduce((rev, char)=> char + rev, ''); 

}
console.log(reverse("gopal kunwar"));

function findLongestWord(arr) {  
  let result = arr.reduce((r, e) => r.length < e.length ? e : r, "");
 
 
  
}

function filterLongWords(arr, num) {
  return arr.filter((word) => word.length > num);
}