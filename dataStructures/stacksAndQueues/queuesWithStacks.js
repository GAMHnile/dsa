class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  pop() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack.pop();
  }
  isEmpty() {
    let empty = false;
    if (this.stack.length === 0) {
      empty = true;
    }
    return empty;
  }
}

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.first = null;
  this.last = null;
  this.length = 0;
  this.mainStack = new Stack();
  this.subStack = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.length === 0) {
    this.first = x;
  }
  this.mainStack.push(x);
  this.last = x;
  this.length++;
  return;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const itemToPop = this.first;
  let holder = this.mainStack.pop();
  this.last = holder;
  while (holder !== null) {
    this.subStack.push(holder);
    holder = this.mainStack.pop();
  }
  this.subStack.pop(); //discard the first item
  this.first = this.subStack.pop(); //hold a refference to the new first item
  holder = this.first;
  while (holder !== null) {
    this.mainStack.push(holder);
    holder = this.subStack.pop();
  }

  this.length--;
  return itemToPop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.first;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  let isEmpty = false;
  if (this.length === 0) {
    isEmpty = true;
  }
  return isEmpty;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();
console.log("first pop", param_2);
console.log("peek", param_3);
console.log("empty", param_4);
obj.pop();
obj.pop();
obj.pop();
console.log(obj.empty());
