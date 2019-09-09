/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  const doSum = data => {
    const sum = data.toString().split('').reduce(
      (result, item) => {
        return result + Number(item)
      },
      0
    )
    if (sum >= 10) {
      return doSum(sum)
    } else {
      return sum
    }
  }
  return doSum(num)
};

