/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
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
var isSymmetric = function (root) {
  if (root === null) return true
  const equal = (nodeA, nodeB) => {
    if (nodeA === null && nodeB === null) {
      return true
    }
    if (nodeA === null || nodeB === null) {
      return false
    }
    return nodeA.val === nodeB.val && equal(nodeA.left, nodeB.right) && equal(nodeA.right, nodeB.left)
  }
  return equal(root.left, root.right)
};
// @lc code=end

