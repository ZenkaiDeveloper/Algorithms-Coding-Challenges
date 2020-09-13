// https://leetcode.com/problems/two-sum/

//Brute Force Solution
let twoSum = (nums, target) => {
    let result = [];
    for(let i=0;i<nums.length;i++) {
        let targetVal = target - nums[i];
        for(let j=i+1;j<nums.length;j++) {
            if(nums[j] === targetVal) {
                result.push(i, j);
                return result;
            }
        }
    };
};

//Optimal Solution using hashmap
let twoSum = (nums, target) => {
    let numObj = {};
    for(let i=0;i<nums.length;i++) {
        let targetVal = target - nums[i];
        if (targetVal in numObj) {
            return [i, numObj[targetVal]];
        }else{
            numObj[nums[i]] = i;
        }
    };
};
