function firstNonRepeatingCharacter(str) {
  let hashMap ={}
  
  for(let i=0; i<str.length; i++){
    if(!hashMap[str[i]]){
      hashMap[str[i]] = 1 
    } else {
      hashMap[str[i]] = hashMap[str[i]] + 1
    }
  }

  for (const [key, value] of Object.entries(hashMap)) {
    if (value == 1){
        return str.indexOf(key)
    }
  }

  return -1;
}

console.log(firstNonRepeatingCharacter('abqcdfasdf'))