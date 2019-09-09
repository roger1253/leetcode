/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const loop = (left, right) => {
    if (right - left === 1) {
      if (nums[right] === target) {
        return right;
      }
      if (nums[left] === target) {
        return left;
      }
    }
    const middle = parseInt((right - left) / 2) + left;
    if (nums[middle] === target) {
      return middle;
    }
    if (middle === left || middle === right) {
      return -1;
    }
    if (nums[middle] > target) {
      return loop(left, middle);
    }
    if (nums[middle] < target) {
      return loop(middle, right);
    }
  };
  return loop(0, nums.length - 1);
};

