/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null
  const invert = (data) => {
    if (data.left !== null || data.right !== null) {
      [data.left, data.right] = [data.right, data.left]
      if (data.left !== null) {
        invert(data.left)
      }
      if (data.right !== null) {
        invert(data.right)
      }
    }
  }
  invert(root)
  return root
};

