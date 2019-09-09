/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const temp = [...new Set(nums)].sort((a, b) => a - b)
  if (temp.length < 3) return temp[temp.length - 1]
  return temp[temp.length - 3]
};

