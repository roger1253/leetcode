/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = arr2.reduce((result, item, index) => {
    result[item] = index
    return result
  }, {})
  return arr1.sort((a, b) => {
    if (map[a] !== undefined && map[b] !== undefined) {
      return map[a] - map[b]
    }
    return -1
  })
};

