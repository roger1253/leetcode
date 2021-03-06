/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  while (nums.includes(val)) {
    nums.splice(
      nums.findIndex(num => num === val),
      1
    );
  }
};
