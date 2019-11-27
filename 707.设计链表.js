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
  this.createNewNode = (val) => {
    return new Node(val)
  }
  this.getNode = (index) => {
    if (this.root === null) {
      return null
    }
    const loop = (node, count) => {
      if (count === index) {
        return node
      }
      if (node.next === null) {
        return null
      }
      return loop(node.next, count + 1)
    }
    return loop(this.root, 0)
  }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index)
  if (node === null) {
    return -1
  }
  return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.root === null) {
    this.root = this.createNewNode(val)
  } else {
    const node = this.createNewNode(val)
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
    this.root = this.createNewNode(val)
  } else {
    const loop = (node) => {
      if (node.next === null) {
        node.next = this.createNewNode(val)
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
  if (index < 0) {
    this.addAtHead(val)
  } else {
    if (this.root !== null) {
      if (index === 0) {
        const node = this.createNewNode(val)
        node.next = this.root
        this.root = node
      } else {
        const loop = (node, _index) => {
          if (_index === index - 1) {
            const temp = this.createNewNode(val)
            temp.next = node.next
            node.next = temp
          }
          if (node.next !== null) {
            loop(node.next, _index + 1)
          }
        }
        loop(this.root, 0)
      }
    } else {
      if (index === 0) {
        this.root = this.createNewNode(val)
      }
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
    if (index === 0) {
      if (this.root.next === null) {
        this.root = null
      } else {
        this.root = this.root.next
      }
    }
    const prevNode = this.getNode(index - 1)
    if (prevNode !== null) {
      const targetNode = prevNode.next
      if (targetNode !== null) {
        const nextNode = targetNode.next
        if (nextNode !== null) {
          prevNode.next = nextNode
        } else {
          prevNode.next = null
        }
      }
    }
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

