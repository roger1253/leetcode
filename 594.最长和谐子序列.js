/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const temp = {}
  nums.forEach(num => {
    if (temp[num + 1] === undefined) {
      temp[num + 1] = 1
    } else {
      temp[num + 1] += 1
    }
  })
};

