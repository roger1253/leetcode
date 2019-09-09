/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length === 1) {
    if (nums.includes(1)) {
      return 0
    }
  }
  const result = nums.sort((a, b) => a - b).find((item, index) => item !== index)
  if (result === undefined) {
    return nums.length
  }
  return result - 1
};

