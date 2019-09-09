/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = (data) => data.reduce(
    (result, item) => {
      return result + item
    },
    0
  )
  for (let i = 0; i < nums.length; i += 1) {
    const left = sum(nums.slice(0, i))
    const right = sum(nums.slice(i + 1, nums.length))
    if (left === right) {
      return i
    }
  }
  return -1
};

