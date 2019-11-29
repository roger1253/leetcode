/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
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
var swapPairs = function (head) {
  const root = head;
  while (head !== null && head.next !== null) {
    [head.val, head.next.val] = [head.next.val, head.val];
    head = head.next.next;
  }
  return root;
};
// @lc code=end

