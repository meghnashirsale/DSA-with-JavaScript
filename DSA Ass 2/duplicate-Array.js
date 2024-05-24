var removeDuplicates = function(nums) {
    let n = 0; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[n] = nums[i]; 
            n++;
        }
    }
    nums.length = n;
    return nums;
};

const nums = [0, 1, 1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums)); 