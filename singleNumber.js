/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let numMap = {};
    for(const num of nums){
        if(numMap[num]){
            numMap[num]++
        } else{
            numMap[num] = 1;
        }
    }
    for(const [key,value] of Object.entries(numMap)){
        if(value == 1){
            return key;
        }
    }
};

// bitwise solution

function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}



