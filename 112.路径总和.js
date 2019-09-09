/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false
  let flag = false
  const loop = (node, count) => {
    const equal = (count + node.val) === sum
    if (equal && node.left === null && node.right === null) {
      flag = true
    } else {
      if (node.left !== null) {
        loop(node.left, count + node.val)
      }
      if (node.right !== null) {
        loop(node.right, count + node.val)
      }
    }
  }
  loop(root, 0)
  return flag
};

