/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
*/

var largestOddNumber = function(num) {
    let arr = [...num];
    // conditional statement for entire string being odd and f          or an empty string
    if(Number(arr[arr.length - 1]) % 2 == 1){
      return num;
    }
    if(num === ""){
      return ""
    }
    // for loop from end of the arr
    for(let i = arr.length - 1; i >= 0; i--){
      if(Number(arr[i]) % 2 == 1){
        return arr.slice(0,i + 1).join("");
      }
    }
    return ''
};

// less code

var largestOddNumber = function(num) {
    let arr = [...num];
    // for loop from end of the arr
    for(let i = arr.length - 1; i >= 0; i--){
      if(Number(arr[i]) % 2 == 1){
        return arr.slice(0,i + 1).join("");
      }
    }
    return ''
};