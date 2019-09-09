/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let result = 0;
  const loop = (node) => {
    if (node !== null) {
      if (node.val >= L && node.val <= R) {
        result += node.val
      }
      loop(node.left)
      loop(node.right)
    }
  }
  loop(root)
  return result
};

