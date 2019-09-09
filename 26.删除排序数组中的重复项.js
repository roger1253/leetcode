/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index += 1) {
    if (index !== nums.length - 1) {
      if (nums[index] === nums[index + 1]) {
        nums.splice(index, 1)
        index -= 1
      }
    }
  }
};

