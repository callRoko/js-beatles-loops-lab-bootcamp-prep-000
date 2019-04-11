// add solution here
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  var counter = []
 for (let players = 0; players < musicians.length; players++){
   counter.push(`${musicians[players]} plays ${instruments[players]}`)
 }
 return counter
}

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]
var newFacts = []
function johnLennonFacts(facts){
  while(newFacts < facts.length){
  console.log("${facts} + !!!")
  return newFacts
  }
}
