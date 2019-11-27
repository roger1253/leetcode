/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const temp = {}
  for (let i = 0; i < nums.length; i += 1) {
    if (temp[nums[i]] !== undefined && (Math.abs(temp[nums[i]] - i) <= k)) {
      return true
    } else {
      temp[nums[i]] = i
    }
  }
  return false
};

