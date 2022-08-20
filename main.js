
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

// myBoolean = solution("abc","")
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

// answer = uniqueInOrder('AAAABBBCCDAABBB')
// console.log(answer)


//Split string into an array of pairs of two
// assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
// assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// assert.deepEqual(solution(""), []);
//Aug 19 2022
function solution(str){
  //declare neccessay variables here
  newArray=[];

   if(str.length == 1){
     newString = str + "_"
     newArray.push(newString)
   }
    else if(str.length % 2 == 0){
      for(x=0; x < str.length; x+=2){
        newString = str[x]+str[x+1]
        newArray.push(newString)
      }
    }
    else{
      for(x=0; x<str.length-1; x+=2){
        newString = str[x]+str[x+1]
        newArray.push(newString)
      }
      lastString = ""
      lastString = str[str.length-1] + "_"
      newArray.push(lastString)
    }
  return newArray;
}

myAnswer = solution("abcdefgh")
console.log(myAnswer)