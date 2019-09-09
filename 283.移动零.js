/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0
  const doMove = () => {
    const index = nums.findIndex(num => num === 0)
    if (index !== -1) {
      nums.splice(index, 1)
      count += 1
      doMove()
    }
  }
  doMove(nums)
  nums.push(...Array.from({ length: count }).fill(0))
};

