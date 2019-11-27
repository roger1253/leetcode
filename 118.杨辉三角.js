/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  const result = [[1]]
  for (let i = 1; i < numRows; i += 1) {
    const temp = [0, ...result[i - 1]]
    result[i] = temp.map((item, index) => {
      if (index === temp.length - 1) {
        return item
      }
      return item + temp[index + 1]
    })
  }
  return result
};
// @lc code=end

