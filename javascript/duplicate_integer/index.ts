// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
class DuplicateInteger {
  hasDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
  }
}
const duplicateInteger = new DuplicateInteger();
const nums = [1, 2, 3, 4, 5, 1];
console.log(duplicateInteger.hasDuplicate(nums));