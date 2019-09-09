/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  // pattern = "abba", str = "dog cat cat dog"
  let flag = true
  const temp = {}
  const patterns = pattern.split('')
  const strs = str.split(' ')
  if (patterns.length !== strs.length) {
    return false
  }
  patterns.forEach((n, index) => {
    if (temp[n] === undefined) {
      temp[n] = strs[index]
    } else {
      if (temp[n] !== strs[index]) {
        flag = false
      }
    }
  })
  const tempValues = Object.keys(temp).map(key => temp[key])
  if ([...new Set(tempValues)].length !== tempValues.length) {
    return false
  }
  return flag
};

