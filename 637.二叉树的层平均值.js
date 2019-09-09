/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (root === null) return []
  const temp = []
  const loop = (node, index) => {
    if (node !== null) {
      if (temp[index] === undefined) {
        temp[index] = [node.val]
      } else {
        temp[index].push(node.val)
      }
      if (node.left !== null) {
        loop(node.left, index + 1)
      }
      if (node.right !== null) {
        loop(node.right, index + 1)
      }
    }
  }
  loop(root, 0)
  return temp.map(data => {
    const sum = data.reduce(
      (result, item) => {
        return result + item
      },
      0
    )
    return sum / data.length
  })
};

