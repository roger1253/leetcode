/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce(
      (result, num, index) => {
        if (index % 2 === 0) {
          return result + num
        }
        return result
      },
      0
    )
};

