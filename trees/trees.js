//Binary search tree
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (typeof value !== "number") {
      return null;
    }
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let comparedNode = this.root;
    while (comparedNode) {
      //note this while loop is non having big O(n)
      //because we are iterating using divide and conquer
      if (value > comparedNode.value) {
        if (comparedNode.right === null) {
          comparedNode.right = newNode;
          comparedNode = null;
        } else {
          comparedNode = comparedNode.right;
        }
      } else {
        //the value is less than the comparedNode.value
        if (comparedNode.left === null) {
          comparedNode.left = newNode;
          comparedNode = null;
        } else {
          comparedNode = comparedNode.left;
        }
      }
    }
    return this;
  }
  lookup(value) {
    if (this.root === null) {
      return null;
    }
    let comparedNode = this.root;
    while (comparedNode) {
      if (comparedNode.value === value) {
        return comparedNode;
      }
      if (value > comparedNode.value) {
        //go right
        comparedNode = comparedNode.right;
      } else {
        //go left
        comparedNode = comparedNode.left;
      }
    }
    //no matching value was found
    return null;
  }
  remove() {
    if (this.root === null) {
      return false;
    }
    let prevNode = null;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        //enter logic to remove the node
        //handle case where root node is being deleted
        if (currentNode.right === null) {
          if (prevNode.right === currentNode) {
            prevNode.right = currentNode.left;
          } else {
            prevNode.left = currentNode.left;
          }
        }

        return this;
      }
      if (value > currentNode.value) {
        //go right
        prevNode = currentNode;
        currentNode = currentNode.right;
      } else {
        //go left
        prevNode = currentNode;
        currentNode = currentNode.left;
      }
    }
    //no matching value was found
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(23));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
