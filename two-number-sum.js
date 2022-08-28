function twoNumberSum(array, targetSum) {

  let hashTable = {}

  for (let i=0; i<array.length; i++) {
    let currentNum = array[i]

    // Find Y
    let Y = targetSum - currentNum;

    // Check if Y is in hashTable
    if(hashTable[Y]){ 
      return [hashTable[Y], currentNum]
    } else {
      //Add currentNum into hashTable
      hashTable[currentNum] = array[i]
    }
  }

  // Return empty array if not found
  return []
}

let testArray = [3, 5, -4, 8, 11,1, -1, 6]
let targetSum = 10

console.log(twoNumberSum(testArray, targetSum))


// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;