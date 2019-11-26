/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = n =>
  ['1', ...Array.from({ length: n - 1 })].reduce(result =>
    result.split('').reduce((temp, word, index) => {
      if (index === 0) {
        return `1${word}`;
      }
      const prevWord = temp.substring(temp.length - 1, temp.length);
      const prevCount = temp.substring(temp.length - 2, temp.length - 1);
      if (prevWord === word) {
        return `${temp.substring(0, temp.length - 2)}${Number(prevCount) +
          1}${word}`;
      }
      return `${temp}1${word}`;
    }, '')
  );
// @lc code=end
