/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < parseInt(s.length / 2, 10); i += 1) {
    [s[s.length - 1 - i], s[i]] = [s[i], s[s.length - 1 - i]];
  }
};

