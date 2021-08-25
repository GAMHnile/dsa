//Bubble sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let passes = array.length - 1;
  array.forEach((num) => {
    for (let i = 0; i < passes; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
    passes--;
  });
}

// bubbleSort(numbers);
// console.log(numbers);

//Selection sort
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let min;
  let minIdx = 0;
  array.forEach((num, idx) => {
    min = num;
    for (let i = idx; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minIdx = i;
      }
    }
    array[minIdx] = num;
    array[idx] = min;
  });
}

// selectionSort(numbers);
// console.log(numbers);

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {}

// insertionSort(numbers);
// console.log(numbers);

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const splitIndex = Math.ceil(array.length / 2);
  const left = array.slice(0, splitIndex);
  const right = array.slice(splitIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftPointer = 0;
  let rightPointer = 0;
  let mergedArr = [];
  while (leftPointer < left.length && rightPointer < right.length) {
    if (
      left[leftPointer] < right[rightPointer] ||
      left[leftPointer] === right[rightPointer]
    ) {
      mergedArr.push(left[leftPointer]);
      leftPointer++;
      if (leftPointer === left.length) {
        mergedArr = mergedArr.concat(right.slice(rightPointer));
      }
    } else {
      mergedArr.push(right[rightPointer]);
      rightPointer++;
      if (rightPointer === right.length) {
        mergedArr = mergedArr.concat(left.slice(leftPointer));
      }
    }
  }

  return mergedArr;
}

const answer = mergeSort(numbers);
console.log(answer);

//#1 - Sort 10 schools around your house by distance: Any the input is small and the time will be small maybe insertion because of O(1) space complexity

//#2 - eBay sorts listings by the current Bid amount: radix or counting sort the input is numbers with small range

//#3 - Sport scores on ESPN: Quick sort the inputs will be random enough to work without getting O(n^2)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge sort dont want to mistakingly hit O(n^2)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion sort

//#6 - Temperature Records for the past 50 years in Canada: quick sort, or a counting sort (if no decimals are involved).

//#7 - Large user name database needs to be sorted. Data is very random.:  Quick sort, or merge sort if there's enough memory

//#8 - You want to teach sorting for the first time: Bubble sort, or insertion sort, or selection sort
