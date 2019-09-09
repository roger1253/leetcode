/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的K-diff数对
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const temp = {}
  let count = 0
  nums.forEach(num => {
    if (temp[num] === undefined) {
      const prev = num - k
      const next = num + k
      const loop = (index) => {
        if (temp[index] !== undefined) {
          if (!temp[index].includes(num)) {
            temp[index].push(num)
          }
        } else {
          temp[index] = [num]
        }
      }
      if (prev >= 0) {
        loop(prev)
      }
      loop(next)
    }
  })
  Object.keys(temp).forEach(key => {

  })
};

