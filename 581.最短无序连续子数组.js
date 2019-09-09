/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length === 1) return 0;
  const sortNums = [...nums].sort((a, b) => a - b);
  let start = nums.length - 1;
  let end = 0;
  for (let index = 0; index <= nums.length; index += 1) {
    if (nums[index] !== sortNums[index]) {
      start = index;
      break;
    }
  }
  for (let index = nums.length - 1; index >= 0; index -= 1) {
    if (nums[index] !== sortNums[index]) {
      end = index;
      break;
    }
  }
  if (end > start) {
    return end - start + 1;
  }
  return 0;
};

