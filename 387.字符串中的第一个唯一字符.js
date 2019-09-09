/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const words = s.split('');
  const temp = {};
  for (let i = 0; i < words.length; i += 1) {
    if (temp[words[i]] === undefined) {
      temp[words[i]] = i;
    } else {
      temp[words[i]] = -1;
    }
  }
  const [result = -1] = Object.keys(temp)
    .filter(key => temp[key] !== -1)
    .map(key => temp[key])
    .sort((a, b) => a - b);
  return result;
};

