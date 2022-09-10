
function nonConstructibleChange(coins) {
  // Return 1 if no coins
  if(coins.length === 0) return 1

  // Sort coins 
  const sortedCoins = coins.sort() //((a,b) => a - b)

  console.log(sortedCoins)

  // Set defaul totalSum
  let totalSum = 0;

  // Loop over coins
  for(let i=0; i<sortedCoins.length; i++){
    // Return the smallest possible change, if next number is bigger than totalSum + 1 
    if(totalSum + 1 < sortedCoins[i]) return totalSum + 1

    // Update totalSum
    totalSum += sortedCoins[i]
  }

  // Return final totalSum if the smallest change was not found middle of an array 
  return totalSum + 1
}

const test = [5, 7, 1, 1, 2, 3, 22]

console.log(nonConstructibleChange(test))
