# Maximum Value of an Ordered Triplet I

"""
You are given a 0-indexed integer array nums.

Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.

The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

 

Example 1:

Input: nums = [12,6,1,2,7]
Output: 77
Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
It can be shown that there are no ordered triplets of indices with a value greater than 77. 
Example 2:

Input: nums = [1,10,3,4,19]
Output: 133
Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
It can be shown that there are no ordered triplets of indices with a value greater than 133.

"""

# Solutions

# O(N ^ 3)

class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res = 0
        for i in range(len(nums)):
           for j in range(i+1, len(nums)):
               for k in range(j+1, len(nums)):
                  res = max(res, (nums[i] - nums[j]) * nums[k])
        return res
    
class Solution:
    def maximumTripletValue(self, nums: List[int], mx = 0) -> int:

        pref = accumulate(nums, max)
        suff = list(accumulate(nums[::-1], max))[::-1]

        return max(0,*((J-I) * K for I, J, K 
                                  in zip(nums[1:],pref,suff[2:])))
    
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res = maxVal = maxDiff = 0
        for n in nums:
            res = max(res, maxDiff * n)
            maxDiff = max(maxDiff, maxVal - n)
            maxVal = max(maxVal, n)

        return res