/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  function Node(val = null) {
    this.val = val
    this.next = null
  }
  this.root = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.root === null) {
    return -1
  }
  const loop = (node, _index) => {
    if (_index === index) {
      return node.val
    }
    if (node.next === null) {
      return -1
    }
    return loop(node.next, _index + 1)
  }
  return loop(this.root, 0)
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.root === null) {
    this.root = new Node(val)
  } else {
    const node = new Node(val)
    node.next = this.root
    this.root = node
  }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.root === null) {
    this.root = new Node(val)
  } else {
    const loop = (node) => {
      if (node.next === null) {
        node.next = new Node(val)
      } else {
        loop(node.next)
      }
    }
    loop(this.root)
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.root !== null) {
    if (index < 0) {
      this.addAtHead(val)
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.root !== null) {

  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

