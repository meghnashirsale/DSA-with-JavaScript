const nums = [2, 7, 11, 15];
const target = 18;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
   
    return undefined;
};

console.log(twoSum(nums, target));