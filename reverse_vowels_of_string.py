# Reverse Vowels of a String

"""
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

"""

# My O(N) Solution

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = 'aeiouAEIOU'

        found = []

        for letter in s:
            if letter in vowels:
                found.append(letter)

        str = ''

        for letter in s:
            if letter in vowels:
                str += found[-1]
                found.pop(-1)
            else:
                str += letter

        return str

# Two Pointer Solution

class Solution:
    def reverseVowels(self, s: str) -> str:
        s = list(s)
        left = 0
        right = len(s) - 1
        m = 'aeiouAEIOU'
        while left < right:
            if s[left] in m and s[right] in m:
                
                s[left], s[right] = s[right], s[left]
                
                left += 1; right -= 1
            
            elif s[left] not in m:
                left += 1
            
            elif s[right] not in m:
                right -= 1
            
        return ''.join(s)
    
# Iterative Solution

class Solution:
    def reverseVowels(self, s: str) -> str:
        it = (ch for ch in s[::-1] if ch.lower() in 'aeiou')
        return ''.join(next(it) if ch.lower() in 'aeiou' else ch for ch in s)
    


