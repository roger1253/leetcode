/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const result = Array.from({ length: numRows }).map(() => []);
  s.split('').reduce((flag, char) => {
    result[Math.abs(flag)].push(char);
    if (flag + 1 === numRows) {
      return -(numRows - 2);
    }
    return flag + 1;
  }, 0);
  return result.map(item => item.join('')).join('');
};
// @lc code=end
