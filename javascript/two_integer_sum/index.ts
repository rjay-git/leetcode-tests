// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

class TwoIntegerSumb {
    twoSum(nums, target) {
        var _nums = [];
        for (let i = 0; i < nums.length; i++) {
            const numA = nums[i];
            for (let j = i + 1; j <= nums.length; j++) {
                const numB = nums[j];
                if (Number(numA + numB) === Number(target)) {
                    _nums.push(i);
                    _nums.push(j);
                }
            }
        }
        return _nums;
    }
}
const twoIntegerSumb = new TwoIntegerSumb();
const nums$: number[] = [2, 7, 11, 15];
const target = 9;
console.log(twoIntegerSumb.twoSum(nums$, target)); // Output: [0, 1]
