/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === '') return '';
  if (s.length === 1) return s;
  const data = s.split('');
  let result = '';
  for (let i = 0; i < data.length; i += 1) {
    let flagEven = 0;
    for (let j = 0; i + j < data.length && i - j >= 0; j += 1) {
      if (data[i + j] === data[i - j]) {
        flagEven = j;
      } else {
        break;
      }
    }
    const evenResult = data.slice(i - flagEven, i + flagEven + 1);
    if (evenResult.length > result.length) {
      result = evenResult.join('');
    }
    if (data[i] === data[i + 1]) {
      let flagOdd = 0;
      for (let j = 0; i + j < data.length - 1 && i - j >= 0; j += 1) {
        if (data[i + 1 + j] === data[i - j]) {
          flagOdd = j;
        } else {
          break;
        }
      }
      const oddResult = data.slice(i - flagOdd, i + 2 + flagOdd);
      if (oddResult.length > result.length) {
        result = oddResult.join('');
      }
    }
  }
  return result;
};
// @lc code=end
