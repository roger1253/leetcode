/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  let result = -1;
  for (let flag = 0; flag <= haystack.length - needle.length; flag += 1) {
    if (haystack.substring(flag, flag + needle.length) === needle) {
      result = flag;
      break;
    }
  }
  return result;
};
// @lc code=end
