/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return []
  const result = []
  const loop = (node, level) => {
    if (result[level] === undefined) {
      result[level] = [node.val]
    } else {
      result[level].push(node.val)
    }
    if (node.left !== null) {
      loop(node.left, level + 1)
    }
    if (node.right !== null) {
      loop(node.right, level + 1)
    }
  }
  loop(root, 0)
  return result.reverse()
};

