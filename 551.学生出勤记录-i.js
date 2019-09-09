/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  const data = s.split('')
  let limitA = 0
  let limitL = 0
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === 'L') {
      limitL += 1
    } else {
      limitL = 0
      if (data[i] === 'A') {
        limitA += 1
      }
    }
    if (limitA === 2) {
      return false
    }
    if (limitL === 3) {
      return false
    }
  }
  return true
};

