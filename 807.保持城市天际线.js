/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let result = 0
  grid.forEach(
    (row, rowIndex) => {
      return row.forEach(
        (item, colIndex) => {
          const max = Math.min(
            Math.max(...row),
            Math.max(...grid.map(temp => temp[colIndex]))
          )
          if (max > item) {
            result += max - item
          }
        }
      )
    }
  )
  return result
};

