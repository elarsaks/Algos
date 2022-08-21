const test1 = [8, 5, 2, 9, 5, 6, 3]


function bubbleSort(array) {
  // Insert value into hadToSort to start do while loop
  let hadToSort = [true]

  do {
    // Set hadToSort to empty (false) on every iteration
    hadToSort = []

    // Loop over an array
    for (let i = 0; i < array.length; i++){

        // Assign left and right pointer
        let leftPointer = array[i-1]
        let rightPointer = array[i]

       // If right pointer value is bigger than left pointer value
        if(leftPointer > rightPointer){
          // Swap values in array
          array[i-1] = rightPointer
          array[i] = leftPointer

          // Set has to sort true
          hadToSort.push(true)
        }
    }

    // Call this for loop until hadToSort return false
  } while (hadToSort.length > 0)

    // At the end return sorted array
    return array
}
// Do not edit the line below.
//exports.bubbleSort = bubbleSort;

console.log(bubbleSort(test1));