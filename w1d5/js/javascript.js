/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function max(val1,val2)
{
    return val1>val2?val1:val2;
    
}

function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}


console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));


maxOfThree=function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

// isVowel Function

function isVowel(x)
{
  x=x.toUpperCase();
  var result;
    result = x== "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
}

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('A') is true  " + myFunctionTest(true, isVowel('A')));
console.log("Expected output of isVowel('f') is false  " + myFunctionTest(false, isVowel('f')));

//sum() and a function multiply()
function sum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
function multiply(numbers){
 let result=1;
 for (let i = 1; i < numbers.length; i++) {
  result*= numbers[i];
}
return result;
}
console.log("Expected output of sum(1,2,3,4) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of multiply(1,2,3,4) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));


//String function reverse()

function reverse(myString){
  return myString.split("").reverse().join("");
  
}


console.log("Expected output of reverse(gopal kunwar) is rawnuk lapog  " + myFunctionTest('rawnuk lapog', reverse('gopal kunwar')));
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));

//findLongestWord()
function findLongestWord(arr) {
  let wordLength=arr[0].length;
  for(let i=1; i<arr.length;i++){
    if(arr[i].length>wordLength)
    {
      wordLength=arr[i].length;
    }
    
  }
  return wordLength;
  
}
console.log("Expected output of findLongestWord(['gopal','kunwar','anil']) is 6  " + myFunctionTest(6, findLongestWord(['gopal','kunwar','anil'])));


//filterLongWords()

function filterLongWords(array, i) {
    var longWords = [];
    array.forEach(function (element) {
        if( element.length > i ) 
              { longWords.push(element)};
    });
    return longWords;
} 

console.log("Expected output of filterLongWords(['gopal','kunwar','ram'],3) is ['gopal','kunwar'] " + myFunctionTest(JSON.stringify(['gopal','kunwar']), JSON.stringify(filterLongWords(["gopal","kunwar","ram"],3))));


const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log("Expected output of [1,3,5,3,3] multiply by 10 is "+b);

const c = a.filter(function(elem, i, array){
  return elem === 3;});

  console.log("Expected output of [1,3,5,3,3] equal to 3 is "+c);

  const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
  console.log("Expected output of [1,3,5,3,3] multiplication of all element is "+d);
