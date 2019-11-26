/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const isPass = item =>
    strs.reduce((flag, str) => {
      if (flag) {
        return str.startsWith(item);
      }
      return flag;
    }, true);
  const [example = ''] = strs;
  return example.split('').reduce((result, letter) => {
    const temp = `${result}${letter}`;
    return isPass(temp) ? temp : result;
  }, '');
};
// @lc code=end
