/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  const data = s.split('');
  const map = {};
  let result = 0;
  for (let start = 0, end = 0; end < data.length; end += 1) {
    if (map[data[end]] !== undefined) {
      start = Math.max(start, map[data[end]]);
    }
    result = Math.max(end - start + 1, result);
    map[data[end]] = end + 1;
  }
  return result;
};
// @lc code=end

