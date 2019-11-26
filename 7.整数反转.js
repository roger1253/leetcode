/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result;
  if (x < 0) {
    const xStr = x.toString();
    result = -Number(
      xStr
        .substring(1, xStr.length)
        .split('')
        .reverse()
        .join('')
    );
  } else {
    result = Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) return 0;
  return result;
};
// @lc code=end
