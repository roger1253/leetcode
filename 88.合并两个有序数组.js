/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let count = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[count] = nums1[i]
        i -= 1
      } else {
        nums1[count] = nums2[j]
        j -= 1
      }
    } else if (i >= 0) {
      nums1[count] = nums1[i]
      i -= 1
    } else {
      nums1[count] = nums2[j]
      j -= 1
    }
    count -= 1
  }
};

