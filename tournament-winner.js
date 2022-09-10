function tournamentWinner(competitions, results) {
  
  let scoreBoard = {}

  for(let i=0; i<results.length; i++){
    let winner = results[i] ? competitions[i][0] : competitions[i][1]

    if(scoreBoard[winner]){
      scoreBoard[winner] = scoreBoard[winner] +3
    } else {
      scoreBoard[winner] = 3
    }
  }

  let biggest

  Object.entries(scoreBoard).forEach(([key, value]) => {
      
    if(!biggest) {biggest = key}

    if(scoreBoard[biggest] < value){
      biggest = key
    }
  })
  
  return biggest;
}

const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]

const results = [0,0,1]

console.log(tournamentWinner(competitions, results))