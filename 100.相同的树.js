/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const hasEmpty = (...args) => args.includes(null);
  const handleEmpty = (...args) => args.every(arg => arg === null);
  if (hasEmpty(p, q)) {
    return handleEmpty(p, q);
  }
  const compare = (a, b) => {
    if (a.val !== b.val) return false;
    if (hasEmpty(a.left, b.left, a.right, b.right)) {
      return handleEmpty(a.left, b.left, a.right, b.right);
    }
    return compare(a.left, b.left) && compare(a.right, b.right);
  };
  return compare(p, q);
};

