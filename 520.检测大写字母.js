/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.toUpperCase() === word || word.toLowerCase() === word) return true;
  const first = word.substring(0, 1);
  const rest = word.substring(1, word.length);
  return first === first.toUpperCase() && rest.toLowerCase() === rest;
};

