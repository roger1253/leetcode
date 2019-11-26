/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX_NUM = Math.pow(2, 31) - 1;
  const MIN_NUM = -Math.pow(2, 31);
  const matches = str.match(/^\s*[+-]?\d+/);
  if (matches === null) return 0;
  const [targetStr] = matches;
  const targetNum = Number(targetStr);
  if (targetNum < 0) {
    return Math.max(Number(targetStr), MIN_NUM);
  }
  return Math.min(Number(targetStr), MAX_NUM);
};
// @lc code=end
