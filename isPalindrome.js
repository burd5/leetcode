/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/

// input --> integer, return boolean if palindrome
// will always be whole number, only integers/no special characters

// Test Cases
// 121 = true
// 2332 = true
// 12312 = false

function isPalindrome(num){
    //turn number into a string. split/reverse/join
        let reverseNum = (String(num).split('').reverse().join(''))  ; 
    //compare reversed string to original num ('string')
        return reverseNum == String(num)
  }
  
  console.log(isPalindrome(121), true)
  console.log(isPalindrome(2332), true)
  console.log(isPalindrome(12312), false)