/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const sortNums = nums.sort((a, b) => a - b)
  let result = sortNums[0] + sortNums[1] + sortNums[2]
  for (let i = 0; i < sortNums.length - 2; i += 1) {
    let start = i + 1
    let end = sortNums.length - 1
    while (start < end) {
      const sum = sortNums[start] + sortNums[end] + sortNums[i]
      if (sum === target) {
        return target
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum
      }
      if (sum > target) {
        end -= 1
      }
      if (sum < target) {
        start += 1
      }
    }
  }
  return result
};
// @lc code=end

