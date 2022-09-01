function isValidSubsequence(array, sequence) {
    let countMatchingItems = 0

    // Loop over array
    for (let i = 0; i < array.length; i++) {
      if(array[i] === sequence[countMatchingItems]){
        countMatchingItems = countMatchingItems + 1
      }  
    }

    // Return false if no matching was found
    return countMatchingItems === sequence.length
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [5, 1, 22, 6, -1, 8, 10]

console.log('Final return ',isValidSubsequence(array, sequence))