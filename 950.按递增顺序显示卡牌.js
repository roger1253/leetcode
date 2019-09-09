/*
 * @lc app=leetcode.cn id=950 lang=javascript
 *
 * [950] 按递增顺序显示卡牌
 */
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const sortDeck = deck.sort((a, b) => b - a)
  return sortDeck.reduce((result, item, index) => {
    if (index === 0) {
      return [item]
    }
    if (index === 1) {
      return [item, ...result]
    }
    const last = result[result.length - 1]
    const rest = result.slice(0, result.length - 1)
    return [
      item,
      last,
      ...rest
    ]
  }, [])
};

