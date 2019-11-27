/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  class Node {
    constructor(val) {
      this.val = val;
      this.sons = [];
      this.isWord = false;
    }
  }
  class Tree {
    constructor() {
      this.root = new Node();
    }

    getMaxWord() {
      let result = '';
      const loop = (node, prefix) => {
        node.sons.forEach((itemNode) => {
          if (itemNode.isWord) {
            const word = `${prefix}${itemNode.val}`;
            if (itemNode.sons.length === 0) {
              result = word.length > result.length ? word : result;
            } else {
              loop(itemNode, word);
            }
          }
        });
      };
      loop(this.root, '');
      return result;
    }

    getTargetSonNode(node, val) {
      const { sons } = node;
      return sons.find(item => item.val === val);
    }

    insert(word) {
      const chars = word.split('');
      chars.reduce((temp, char, index) => {
        const targetSonNode = this.getTargetSonNode(temp, char);
        if (targetSonNode !== undefined) {
          return targetSonNode;
        }
        const node = new Node(char);
        temp.sons.push(node);
        const isLast = index === chars.length - 1;
        if (isLast) {
          node.isWord = true;
        }
        return node;
      }, this.root);
    }
  }
  const tree = new Tree();
  words.forEach((word) => {
    tree.insert(word);
  });
  return tree.getMaxWord();
};

