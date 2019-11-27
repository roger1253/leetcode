/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let result = true
  const loop = (node) => {
    if (node.val !== root.val) {
      result = false
    } 
    if (node.left !== null) {
      loop(node.left)
    }
    if (node.right !== null) {
      loop(node.right)
    }
  }
  loop(root)
  return result
};

