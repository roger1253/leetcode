/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 0) return 0
  let sum = 0
  let result = 1
  for (let i = 1; sum + i <= n; i += 1) {
    sum += i
    result = i
  }
  return result
};

