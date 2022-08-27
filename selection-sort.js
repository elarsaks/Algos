const test1 = [8, 5, 4, 2, 9, 5, 6, 3]

function selectionSort(array) {
  // Loop over all the items in array
  for (let i=0; i<array.length; i++){

    // Find the smallest number in sub array
    let smallestNindex = i
    for(let subArrayStart = i+1; subArrayStart<array.length; subArrayStart++){
      let firstNumberInSubArray = array[subArrayStart]
      let smallestNumberInsubArray = array[smallestNindex]

      if(firstNumberInSubArray < smallestNumberInsubArray)
        smallestNindex = subArrayStart
      }
    }

    if(smallestNindex != i){
      // Swap items
      let tmp = array[i]
      array[i] = array[smallestNindex]
      array[smallestNindex] = tmp
    }
  }
  
  return array
}

console.log(selectionSort(test1)); 