// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
}
const solution = new Solution();
const nums = [1, 2, 3, 4, 5, 1];
console.log(solution.hasDuplicate(nums));
