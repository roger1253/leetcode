/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  let temp = [1, 2, 3];
  for (let i = 3; i < n; i += 1) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[n - 1];
};
// @lc code=end
