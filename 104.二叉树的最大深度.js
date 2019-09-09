/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  let result = 0
  const find = (node, deep) => {
    if (node !== null) {
      result = Math.max(result, deep)
      if (node.left !== null) {
        find(node.left, deep + 1)
      }
      if (node.right !== null) {
        find(node.right, deep + 1)
      }
    }
  }
  find(root, 1)
  return result
};

