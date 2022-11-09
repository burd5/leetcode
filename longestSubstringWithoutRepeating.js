/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// Sliding Window Technique

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

// Other answer


var lengthOfLongestSubstring = function(s) {
    var temp = [];
    var maxLength = 0;
    
    for(var i = 0; i < s.length; i++){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i]);
            if(temp.length > maxLength)
                maxLength = temp.length;
        }else{
            temp = temp.slice(temp.indexOf(s[i]) + 1,temp.length);
            temp.push(s[i]);
        }
    }
    
    return maxLength;
};