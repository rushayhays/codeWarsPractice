
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
console.log(myBoolean);