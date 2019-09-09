/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  if (c === 0 || c === 1) return true
  for (let i = 1; i < c; i += 1) {
    const rest = c - i * i
    if (Number.isInteger(Math.sqrt(rest))) {
      return true
    }
  }
  return false
};

