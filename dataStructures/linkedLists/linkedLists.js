//Singly Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    if (typeof index !== "number") {
      return "invalid index";
    }
    let idx = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (idx === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      idx++;
    }
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    //check params
    if (typeof index !== "number") {
      return "invalid index";
    }
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
    }
    let prevNode = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    //check params
    if (typeof index !== "number") {
      return "invalid index";
    }
    if (index >= this.length) {
      return this.printList();
    }
    const prevNode = this.traverseToIndex(index - 1);
    const unwanteDnode = prevNode.next;
    prevNode.next = unwanteDnode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    // let currentNode = this.head;
    // this.tail = this.head;
    // const listArray = [];
    // while (currentNode) {
    //   listArray.push(currentNode);
    //   currentNode = currentNode.next;
    // }
    // for (let i = listArray.length - 1; i >= 0; i--) {
    //   if (i === listArray.length - 1) {
    //     this.head = listArray[i];
    //   }
    //   if (i === 0) {
    //     listArray[i].next = null;
    //     return this;
    //   }
    //   listArray[i].next = listArray[i - 1];
    // }

    //alternatively
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.tail.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(299, 88);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse().printList());
// console.log(myLinkedList.remove(3));

//Doubly Linked list

// class Dnode {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }

//   traverseToIndex(index) {
//     if (typeof index !== "number") {
//       return "invalid index";
//     }
//     let idx = 0;
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       if (idx === index) {
//         return currentNode;
//       }
//       currentNode = currentNode.next;
//       idx++;
//     }
//   }

//   append(value) {
//     const newNode = new Dnode(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = new Dnode(value);
//     newNode.next = this.head;
//     newNode.prev = null;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   insert(index, value) {
//     //check params
//     if (typeof index !== "number") {
//       return "invalid index";
//     }
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     if (index === 0) {
//       this.prepend(value);
//     }
//     let prevNode = this.traverseToIndex(index - 1);
//     const newNode = new Dnode(value);
//     newNode.next = prevNode.next;
//     newNode.prev = prevNode;
//     prevNode.next = newNode;
//     this.length++;
//   }

//   remove(index) {
//     //check params
//     if (typeof index !== "number") {
//       return "invalid index";
//     }
//     if (index >= this.length) {
//       return this.printList();
//     }
//     const prevNode = this.traverseToIndex(index - 1);
//     const unwanteDnode = prevNode.next;
//     prevNode.next = unwanteDnode.next;
//     this.length--;
//     return this.printList();
//   }
// }

// const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(2, 99);
// myDoublyLinkedList.insert(299, 88);
// console.log(myDoublyLinkedList.printList());
// console.log(myDoublyLinkedList.remove(3));
