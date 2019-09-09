/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const lines = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm'
  ];
  const map = lines.reduce(
    (result, line, index) => {
      line.split('').forEach(
        (char) => {
          result[char] = index;
        }
      );
      return result;
    },
    {}
  );
  return words.filter(
    (word) => {
      const chars = word.toLowerCase().split('');
      const [first] = chars;
      const flag = map[first];
      return chars.every(
        char => map[char] === flag
      );
    }
  );
};

