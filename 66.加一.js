/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let result = [...digits];
  const valid = () => {
    if (result.some(item => item === 10)) {
      const targetIndex = result.findIndex(item => item === 10);
      result[targetIndex] = 0;
      if (targetIndex === 0) {
        result.unshift(1);
      } else {
        result[targetIndex - 1] = result[targetIndex - 1] + 1;
        valid();
      }
    }
  };
  result[result.length - 1] = result[result.length - 1] + 1;
  valid();
  return result;
};
// @lc code=end
