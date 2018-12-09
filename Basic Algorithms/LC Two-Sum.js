// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.



//brute force
var twoSum = function(nums, target) {
    let arr = [];
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target && i !== j){
                arr = [...arr, ...[i,j]]
            }
        }
    }
    return arr
};
