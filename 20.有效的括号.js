/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const data = s.split('')
  let temp = []
  for (let i = 0; i < data.length; i += 1) {
    const char = data[i]
    temp.push(char)
    if (temp.length >= 2) {
      const a = temp[temp.length - 2]
      const b = temp[temp.length - 1]
      if ((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) {
        temp.splice(temp.length - 2, 2)
      }
    }
  }
  return temp.length === 0
};
