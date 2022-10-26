/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target) 
    }
    else{
        nums.push(target);
        nums.sort( (a,b) => a - b)
        return nums.indexOf(target);
    }
};


//  Optimized Solutions

var searchInsert = function(nums, target) {
    var left = 0, right = nums.length - 1;
    while(left <= right) {
        var mid = Math.floor((left + right )/ 2)
        if(nums[mid] == target) {
            return mid;
        }
        else if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};


const searchInsert = (nums, target) => {

    if(nums.indexOf(target) != -1) {
        return nums.indexOf(target);
    } else {
        if(Math.max(...nums, target) == target) {
            return nums.length;
        } else {
            for(let i =0; i < nums.length; i++) {
                if(nums[i] > target) {
                    return nums.indexOf(nums[i]);
                } 
            }
        }
        
    }
}