
//Aug 16 2022, String ends with?
// abc, bc == true
// abc, d == false
function solution(str, ending){
    //I don't understand why ot needs to evaluate to true if ening == "",
    //but apparently it does, so lines 8-10 were added.
    if(ending == ""){
      return true
    }
    if(str[-1] == ending[-1]){
      lengthOfEnding = ending.length
      possibleMatch = str.slice(-lengthOfEnding)
      if(possibleMatch == ending){
        return true
      }else{
        return false
      }
      
    }else{
      return false
    }
  }

myBoolean = solution("abc","")
// console.log(myBoolean);


//Unique in Order
//Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
//Aug 18, 2022
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  newArray = []
  newArray.push(iterable[0])
  for(x=1; x<iterable.length ;x++){
    //You use 'newArray.length -1', in order to always get the last element in the array
    if(iterable[x] != newArray[newArray.length -1]){
      newArray.push(iterable[x])
    }
  }
  //This detects if the iterable was empty, or only had undefined values in it
  if(newArray == false){
    newArray = []
  }
  return newArray;
}

answer = uniqueInOrder('AAAABBBCCDAABBB')
console.log(answer)