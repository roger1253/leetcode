/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let temp = []
  nums.forEach(
    (num) => {
      temp = [
        ...temp,
        ...temp.map(item => [...item, num]),
        [num]
      ]
    }
  )
  return [...temp, []]
};

