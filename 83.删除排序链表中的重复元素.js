/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return head
  const loop = (node) => {
    if (node.next !== null) {
      if (node.val === node.next.val) {
        node.next = node.next.next
      }
      if (node.next !== null) {
        loop(node.next)
      }
    }
  }
  loop(head)
  return head
};

