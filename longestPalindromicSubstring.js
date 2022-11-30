/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

 let isPalindrome = function(s) {
    let l = 0, r = s.length-1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        else{
        l++, r--;
    }
    }
    return true;
}

var longestPalindrome = function(s) {
    let longest = '';
    let current = '';
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
        if(isPalindrome(s.slice(j, s.length - i))){
            current = s.slice(j, s.length - i)
        }
        if(current.length > longest.length){
            longest = current;
        }
    }}
    return longest;
};