/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []
  const sortNums = nums.sort((a, b) => a - b);
  const result = []
  for (let i = 0; i < sortNums.length - 2; i += 1) {
    if (sortNums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let L = i + 1
    let R = sortNums.length - 1
    while (L < R) {
      const sum = sortNums[L] + sortNums[R] + sortNums[i]
      if (sum > 0) {
        R -= 1
      } else if (sum < 0) {
        L += 1
      } else {
        result.push([
          sortNums[i],
          sortNums[L],
          sortNums[R],
        ])
        while (L < R && sortNums[L] === sortNums[L + 1]) {
          L += 1
        }
        while (L < R && sortNums[R] === sortNums[R - 1]) {
          R -= 1
        }
        L += 1
        R -= 1
      }
    }
  }
  return result
};
// @lc code=end

