/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.includes(target)) {
    return nums.findIndex(num => num === target);
  } else {
    for (let flag = 0; flag < nums.length; flag += 1) {
      if (nums[flag] > target) {
        return flag;
      }
    }
    return nums.length;
  }
};
// @lc code=end
