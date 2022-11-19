/*
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

The frequency of a letter x is the number of times it occurs in the string.
You must remove exactly one letter and cannot chose to do nothing.
 

Example 1:

Input: word = "abcc"
Output: true
Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
*/




var equalFrequency = function(word) {
    let letterMap = {};
    for(let i = 0; i < [...word].length; i++){
        if(letterMap[word[i]]){
            letterMap[word[i]]++
        } else{
            letterMap[word[i]] = 1;
        }
    }
    let letterValues = Object.values(letterMap)
    for(let i = 0; i < letterValues.length; i++){
      const newArr = Array.from(letterValues);
      if(newArr[i] === 1){
        newArr.splice(i,1)
      } else{
        newArr[i]--
      }
      if(new Set(newArr).size == 1) return true;
    }
    return false;

};