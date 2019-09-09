/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) return false
  const temp = {}
  let flag = false
  const loop = (node) => {
    if (temp[node.val] !== undefined) {
      flag = true
    } else {
      temp[node.val] = true
      if (node.next !== null) {
        loop(node.next)
      }
    }
  }
  loop(head)
  return flag
};

