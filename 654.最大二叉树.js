/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const loop = (data, node) => {
    const maxIndex = data.reduce(
      (result, _, index) => (data[result] > data[index] ? result : index),
      0
    );
    node.val = data[maxIndex];
    const left = data.slice(0, maxIndex);
    if (left.length > 0) {
      node.left = new TreeNode();
      loop(left, node.left);
    }
    const right = data.slice(maxIndex + 1, data.length);
    if (right.length > 0) {
      node.right = new TreeNode();
      loop(right, node.right);
    }
  };
  const root = new TreeNode();
  loop(nums, root);
  return root;
};

