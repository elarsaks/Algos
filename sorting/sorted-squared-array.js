function sortedSquaredArray(array) {
  let resp = Array(array.length - 1)
  let start = 0 // Point at the start
  let end = array.length-1 // Point at the end

  // Loop over array
  for(let i=array.length-1; i >= 0; i--){
    // If end is bigger than start
    if(Math.abs(array[start]) < Math.abs(array[end])){
      resp[i] = array[end] * array[end]
      end = end-1
    } else {
      resp[i] = array[start] * array[start]
      start = start +1
    }
  }
  
  return resp;
}

let test = [-7, -5, -4, 3, 6, 8, 9]
console.log(sortedSquaredArray(test) )