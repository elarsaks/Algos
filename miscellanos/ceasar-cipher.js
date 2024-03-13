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

/*
function caesarCipherEncryptor(string, key) {

  const alphabet =[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z' ]

  let newString = ''

  for(let i=0; i<string.length; i++){
    let stringIdx  = alphabet.indexOf(string.charAt(i))
    let cipherIdx = stringIdx + key

    if(cipherIdx > alphabet.length - 1){
        cipherIdx = cipherIdx % alphabet.length
    }

    newString =  newString + alphabet[cipherIdx]
  }

  return newString
} */