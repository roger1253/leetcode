/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const raw = s.split('');
  if (raw.length < k) return raw.reverse().join('');
  for (let i = 0; i < raw.length; i += 2 * k) {
    const overflow = i + 2 * k >= raw.length && i + k > raw.length;
    if (overflow) {
      raw.splice(
        i,
        raw.length - i,
        ...raw.slice(i, s.length).reverse()
      );
    } else {
      raw.splice(i, k, ...raw.slice(i, i + k).reverse());
    }
  }
  return raw.join('');
};

