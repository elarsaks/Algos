function caesarCipherEncryptor(string, key) {
  const alphabet ='abcdefghijklmnopqrstuvwxyz' 

  let [newString, alphabetLength] = ['', alphabet.length]
  
    for(const char of string){
        const cipherIdx = alphabet.indexOf(char) + key;
        const alphabetIdx = (cipherIdx > alphabetLength -1) ? cipherIdx % alphabetLength : cipherIdx  
        newString =  newString + alphabet[alphabetIdx]
    }

  return newString
}

console.log(caesarCipherEncryptor('abc', 3))