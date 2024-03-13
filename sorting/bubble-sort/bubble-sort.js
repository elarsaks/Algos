function bubbleSort(array) {
  let hadToSort;

  do {
    // Reset hadToSort to false at the beginning of each iteration
    hadToSort = false;

    // Loop over the array
    for (let i = 1; i < array.length; i++) {
      // Compare current element with the previous one
      if (array[i - 1] > array[i]) {
        // Swap if elements are in wrong order
        [array[i - 1], array[i]] = [array[i], array[i - 1]];

        // Mark as had to sort
        hadToSort = true;
      }
    }
    // Repeat until no swaps are needed
  } while (hadToSort);

  // Return the sorted array
  return array;
}

const test1 = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(test1));
