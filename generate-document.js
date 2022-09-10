function generateDocument(characters, document) {
  // Return instantly false if strings are not the same size
  if(characters.length != document.length) return false

  // Create character &document hashMap 
  let charMap = {}
  let docMap = {}

  // Loop over strings
  for(let i=0; i<characters.length; i++){
    // Map out characters
    charMap = charMap[characters[i]] ? charMap[characters[i]] = characters[i] + 1
      : charMap[characters[i]] = 1

    // Map out document
    docMap = docMap[document[i]] 
      ? docMap[document[i]] = document[i] + 1
      : docMap[document[i]] = 1
  }

  // TODO: compare charmap to document Map
  for(const [key, value] of Object.entries(docMap)){
    if(charMap[key] != value){
      return false
    }
  }

  return true;
}