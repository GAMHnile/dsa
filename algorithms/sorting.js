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

insertionSort(numbers);
console.log(numbers);
