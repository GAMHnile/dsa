//Arrays

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.data.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new MyArray();
newArray.push("hey");
newArray.push("hi");
newArray.push("what");
newArray.push("why");
newArray.delete(1);

// console.log(newArray);

function reverseString(str) {
  if (typeof str !== "string") {
    return;
  }

  const strArr = str.split("");
  const reverseStrArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStrArr.push(strArr[i]);
  }
  const reverseStr = reverseStrArr.join("");
  return reverseStr;
}

// console.log(reverseString("Hi my name is George"));

function mergeSortedArray(arr1, arr2) {
  //check inputs are both arrays
  //if one array is empty

  let pointer1 = 0;
  let pointer2 = 0;
  let mergedArr = [];
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      mergedArr.push(arr1[pointer1]);
      pointer1++;
      if (pointer1 === arr1.length) {
        mergedArr = mergedArr.concat(arr2.slice(pointer2));
        break;
      }
    } else {
      mergedArr.push(arr2[pointer2]);
      pointer2++;
      if (pointer2 === arr2.length) {
        mergedArr = mergedArr.concat(arr1.slice(pointer1));
        break;
      }
    }
  }

  return mergedArr;
}

// console.log(mergeSortedArray([0, 3, 4, 31, 35, 67], [4, 6, 30, 45, 99, 106]));
