
var gameBoard = 'original'
var infectionDeck = getInfectionDeck
var difficulty = 1
var gameBoard = 'original'
var numOfPlayers = 4
var playerDeck = getPlayerDeck()
var startingHands = getStartingHands()

function getInfectionDeck() {
  switch (gameBoard) {
    case 'original': return shuffle(originalDeck)
    default: return shuffle(originalDeck)
  }
}

function getPlayerDeck() {
  const arr = []
  const numOfEventCards = getEvents()
  for (var i = 0; i < numOfEventCards; i++) {
    arr.push('event')
  }
  const numOfCities = getCities()
  for (i = 0; i < numOfCities; i++) {
    arr.push('city')
  }
  return shuffle(arr)
}

function getStartingHands() {
  let resultArr = []
  let hand = []
  for (var i = 0; i < getStartingHandSize() * numOfPlayers; i++) {
    hand = []
    for (var j = 0; j < getStartingHandSize(); j++) {
      hand.push[playerDeck.pop()]
    }
    resultArr.push(hand)
  }
}

function addEpidemicsToPlayerDeck()
  const numOfEpidemics = getEpidemics()
  let arr = []
  let resultArr = playerDeck
  for (i = 0; i < numOfOutbreaks; i++) {
    arr.push(0)
  }
  i = 1
  while (i < resultArr.length) {
    arr[i % numOfOutbreaks]++
    i++
  }
  let count = 0
  for (i = 0; i < arr.length; i++) {
    resultArr.splice(Math.floor(Math.random() * arr[i]) + count, 0, 'Epidemic')
    count += arr[i]
  }
}

function shuffle(arr) {
  var resultArr = []
  var countArr = []
  var randNum = 0
  for (let i = 0; i < arr.length; i++) {
    countArr.push(i)
  }
  while (countArr.length > 0) {
    randNum = Math.floor(Math.random() * countArr.length)
    resultsArr.push(arr[randNum])
    countArr.splice(randNum,1)
  }
  return resultArr
}

function getEpidemics() {
  return difficulty + 4
}

function getEvents() {
  switch (numOfPlayers) {
    case 4: return 4
    default: return 6
  }
}

function getCities() {
  return 40
}

function getStartingHandSize () {
  switch (numOfPlayers) {
    case 2: return 4
    case 3: return 3
    case 4: return 2
    case 5: return 2
    default: return 2
  }
}
