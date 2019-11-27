/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0, end = height.length - 1
  let area = 0
  while (start < end) {
    area = Math.max(
      (end - start) * Math.min(height[start], height[end]),
      area
    )
    if (height[start] < height[end]) {
      start += 1
    } else {
      end -= 1
    }
  }
  return area
};
// @lc code=end

