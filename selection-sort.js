const test1 = [8, 5, 2, 9, 5, 6, 3]

function selectionSort(array) {
  // Helper function to find smallest item in array
  function findSmallest(subArray) {
    let smallest;

    subArray.forEach(item => {
      if (!smallest){
        smallest = item
      } else {
        smallest = item > smallest ? smallest : item
      }    
    })

    return smallest
  }
  
  // Loop over the array
  for (let pointer = 0; pointer < array.length; pointer++) {
    let unsorted = array.slice(pointer)
    let indexOfSmallest = unsorted.indexOf(findSmallest(unsorted))

    // Swap values in array
    let temp = array[pointer]

    array[pointer] = array[indexOfSmallest]
    array[indexOfSmallest] = temp
  }
  
  return array
}


// Do not edit the line below.
//exports.selectionSort = selectionSort;

console.log(selectionSort(test1));