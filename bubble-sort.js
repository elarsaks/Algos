const test1 = [8, 5, 2, 9, 5, 6, 3]


function bubbleSort(array) {
  let hadToSort = [true]

  do {
    hadToSort = []
    
    for (let i = 0; i < array.length; i++){
        let leftPointer = array[i-1]
        let rightPointer = array[i]

     
        if(leftPointer > rightPointer){
          array[i-1] = rightPointer
          array[i] = leftPointer
          hadToSort.push(true)
        }
    }    
  } while (hadToSort.length > 0)

    return array
}

// Do not edit the line below.
//exports.bubbleSort = bubbleSort;

console.log(bubbleSort(test1));