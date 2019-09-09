/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  let result = 0
  const find = (node, deep) => {
    if (node !== null) {
      if (node.left !== null) {
        find(node.left, deep + 1)
      }
      if (node.right !== null) {
        find(node.right, deep + 1)
      }
    } else {
      result = Math.min(deep, result)
    }
  }
  find(root, 1)
  return result
};

