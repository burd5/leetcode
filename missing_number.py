# Missing Number

"""


"""

# My Solution

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in range(0, max(nums)):
            if i not in nums:
                return i

        return max(nums) + 1
    
# Gaus Formula

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return (len(nums) * (len(nums) + 1))//2 - sum(nums)
    
# Sum of Total range - Sum of Nums List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return sum(range(len(nums)+1)) - sum(nums)
    
# Set and List Solution

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        return list(set(range(0,len(nums)+1)).difference(set(nums)))[0]
    
