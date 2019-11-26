/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  if (s.length === 1) return map[s];
  const data = s.split('');
  let result = 0;
  for (let i = 0; i < data.length; i += 1) {
    const temp = data[i] + data[i + 1];
    if (map[temp] !== undefined) {
      result += map[temp];
      i += 1;
    } else {
      result += map[data[i]];
    }
  }
  return result;
};
// @lc code=end
