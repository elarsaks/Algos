function isPalindrome(string) {
    
  // Loop over string
  for(let i = 0; i < string.length; i++) {

    // Get the element from the starting of the string
    let left = string.charAt(i)

    // Getting the element backwards from the end of the stringt
    let right = string[(string.length -1) - i]

    // If the elements under the left and right pointer tont match
    if(left != right){
      return false
    } 
  }

  return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;


console.log(isPalindrome('abcdecba'))