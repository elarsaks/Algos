function generateDocument(characters, document) {
  // Return FALSE if there is not enough characters 
  if(characters.length > document.lenth) return false

  // Create character & document hashMap 
  let charMap = {}
  let docMap = {}

  // Loop over strings
  for(let i=0; i<characters.length; i++){
    
    // Map out characters
    charMap[characters[i]] 
        ? charMap[characters[i]] += 1 
        : charMap[characters[i]] = 1

    // Map out document (stop mapping if document has ended, because characters is longer)
    if(document[i]){ 
        docMap[document[i]] 
        ? docMap[document[i]] += 1
        : docMap[document[i]] = 1
    }

  }

  // Compare charmap to document Map
  for(const [docMapKey, docMapValue] of Object.entries(docMap)){
    // Return FALSE if characters dont have requested char
    if(docMapKey && !charMap[docMapKey]) return false
    // Return FALSE if characters dont have enough requested chars
    if(charMap[docMapKey] < docMapValue) return false 
  }

  return true;
}

const characters = 'Bste!hetsi ogEAxpelrt x '
const document = 'AlgoExpert is the Best!'

console.log(generateDocument(characters, document))