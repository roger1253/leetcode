/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const digitToCharMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let result = ['']
  for (let digit of digits.toString().split('')) {
    const chars = digitToCharMap[digit]
    let temp = []
    for (let item of result) {
      for (let char of chars) {
        temp.push(`${item}${char}`)
      }
    }
    result = temp
  }
  return result
};
// @lc code=end

