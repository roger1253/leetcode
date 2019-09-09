/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 */
// 0 0
// 1 1
// 2 1
// 3 2
var fib = function (N) {
  if (N === 0) return 0
  if (N === 1) return 1
  const temp = { 0: 0, 1: 1 }
  for (let i = 2; i <= N; i += 1) {
    temp[i] = temp[i - 2] + temp[i - 1]
  }
  return temp[N]
};

