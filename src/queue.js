const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.root = null;
  }
  // this.r = new ListNode
  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    if (!this.root){
      this.root = new ListNode(value);
    } else {
      let element = this.root;
      while (element.next !== null) {
        element = element.next;
      }
      element.next = new ListNode(value);
    }
  }

  dequeue() {
    let element = this.root.value;
    this.root = this.root.next;
    return element;
  }
}

module.exports = {
  Queue
};
