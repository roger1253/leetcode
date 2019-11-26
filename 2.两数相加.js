/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const root = new ListNode();
  let node = root;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    const sum =
      (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
    carry = 0;
    if (sum >= 10) {
      node.next = new ListNode(sum - 10);
      carry = 1;
    } else {
      node.next = new ListNode(sum);
    }
    node = node.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry === 1) {
    node.next = new ListNode(1);
  }
  return root.next;
};
// @lc code=end

