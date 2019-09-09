/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jArr = J.split('')
  return S.split('').reduce(
    (result, item) => {
      if (jArr.includes(item)) {
        return result + 1
      } else {
        return result
      }
    },
    0
  )
};

