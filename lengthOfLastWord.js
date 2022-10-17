/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

// space characters don't count, there will always be non-space characters, no special characters

//Examples
// 'str boy code goose' = 5
// '   yes   no  okay    bye' = 3
// ' yup nope      water a' = 1

function lengthOfLastWord(str){
    //trim the string to get rid of space at the end
    let trim = str.trim()
    //split the string into an array of words
    let arr = trim.split(' ')
    //find the length of the last word in the array
    arr.pop().length
  
    //One line solution
    return str.trim().split(' ').pop().length
  }
  
  console.log(lengthOfLastWord('str boy code goose'), 5)
  console.log(lengthOfLastWord('   yes   no  okay    bye '), 3)
  console.log(lengthOfLastWord(' yup nope      water a'), 1)