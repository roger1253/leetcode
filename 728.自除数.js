/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let result = []
  for (let i = left; i <= right; i += 1) {
    if (!i.toString().includes('0')) {
      const nums = i.toString().split('')
      const valid = nums.every(num => i % num === 0)
      if (valid) {
        result.push(i)
      }
    }
  }
  return result
};

