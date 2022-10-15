/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// nums --> target, find indices of nums that equal target, always be two numbers, no negative numbers, number will never be itself, return in any order

// Examples
// [2,5,6,8], 11 = [1,2]
// [4,1,7,10], 14 = [0,3]
// [1,9,20,22], 42 = [2,3]

function findIndices(nums,target){
    //loop through array summing values of indices 
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
       if(nums[i] + nums[j] == target && i != j){
           return [i,j]
       }
   }
 }
  }
  
  
  console.log(findIndices([2,5,6,8],11), [1,2])
  console.log(findIndices([4,1,7,10],14), [0,3])
  console.log(findIndices([1,9,20,22],42), [2,3])

