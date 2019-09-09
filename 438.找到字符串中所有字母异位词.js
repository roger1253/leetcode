/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return []
  const result = []
  const flag = p.split('').sort().join()
  const sortP = p.split('').sort().join('')
  const compare = (n) => n.split('').sort().join('') === sortP
  for (let i = 0; i < s.length - p.length + 1; i += 1) {
    const temp = s.substr(i, p.length)
    if (compare(temp)) {
      result.push(i)
    }
  }
  return result
};

