/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  const words = S.toUpperCase().replace(/\-/g, '').split('')
  const rest = words.length % K
  const regularParts = words.slice(rest, words.length).reduce(
    (result, item, index) => {
      const flag = parseInt(index / K)
      if (result[flag] === undefined) {
        result[flag] = item
      } else {
        result[flag] += item
      }
      return result
    },
    []
  )
  if (rest === 0) {
    return regularParts.join('-')
  } else {
    return [
      words.slice(0, rest).join(''),
      ...regularParts
    ].join('-')
  }
};

