/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0) return false
  if (n === 1) return true
  while (n !== 1) {
    n = n / 2
    if (parseInt(n, 10) !== n) {
      return false
    }
  }
  return true
};
// @lc code=end

