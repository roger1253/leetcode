/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let result = nums[0];
  for (num of nums) {
    sum = sum > 0 ? sum + num : num;
    if (result < sum) {
      result = sum;
    }
  }
  return result;
};
// @lc code=end
