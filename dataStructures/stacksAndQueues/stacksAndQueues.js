//Stacks using linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top && !this.bottom) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }
  isEmpty() {
    if (!this.top && !this.bottom && this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();

// console.log(myStack.isEmpty());
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("Discord");

// console.log(myStack.peek());
// console.log(myStack.pop());
// // myStack.pop();
// console.log(myStack.peek());
// console.log(myStack.isEmpty());

//Discord
//Udemy
//google

//stacks using arrays
class StackArr {
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

const myStackArr = new StackArr();

// console.log(myStackArr.isEmpty());
// myStackArr.push("google");
// myStackArr.push("udemy");
// myStackArr.push("Discord");

// console.log(myStackArr.peek());
// console.log(myStackArr.pop());
// // myStackArr.pop();
// console.log(myStackArr.peek());
// console.log(myStackArr.isEmpty());

//Discord
//Udemy
//google

//Queues

class Qnode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Qnode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = holdingPointer.next;
    this.length--;
    return holdingPointer;
  }
  isEmpty() {
    let empty = false;
    if (this.length === 0) {
      empty = true;
    }
    return empty;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("samir");

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
//Joy
//Matt
//Pavel
//Samir
