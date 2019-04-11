
function theBeatlesPlay(musicians, instruments){
  var counter = []
 for (let players = 0; players < musicians.length; players++){
   counter.push(`${musicians[players]} plays ${instruments[players]}`)
 }
 return counter
}


function johnLennonFacts(facts){
  var newFacts = []
  while(newFacts.length < facts.length){
  newFacts.push("${facts} + !!!")
  return newFacts
  }
}
