/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  const map = { "A": "a", "B": "b", "C": "c", "D": "d", "E": "e", "F": "f", "G": "g", "H": "h", "I": "i", "J": "j", "K": "k", "L": "l", "M": "m", "N": "n", "O": "o", "P": "p", "Q": "q", "R": "r", "S": "s", "T": "t", "U": "u", "V": "v", "W": "w", "X": "x", "Y": "y", "Z": "z" }
  return str.replace(/(\w)/g, (item) => {
    return map[item] || item
  })
};

