/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const temp = [...new Set(nums1)]
  return temp.reduce(
    (result, item) => {
      if (nums2.includes(item)) {
        return [...result, item]
      }
      return result
    },
    []
  )
};

