# Add Digits (Leetcode)

"""
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime?

"""

# My Solution - O(N^2)

class Solution:
    def addDigits(self, num: int) -> int:
        total = sum([int(x) for x in str(num)])
        
        while len(str(total)) > 1:
            total = sum([int(x) for x in str(total)])
            print(total)

        return total
    

# Condensed Solution - still O(N^2)

class Solution:
    def addDigits(self, num: int) -> int:
        
        while num >= 10:
            num = sum([int(x) for x in str(num)])
            
        return num
    

# Python O(1)

class Solution(object):
    def addDigits(self, num):
        if num == 0:
            return 0
        return num % 9 or 9