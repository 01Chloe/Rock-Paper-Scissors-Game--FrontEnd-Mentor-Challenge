// Game
const items = document.querySelectorAll(".item")
const playerScoreContainer = document.querySelector(".player-score")
const itemsTabs = ["scissors", "spock", "paper", "lizard", "rock"]
const gameContainer = document.querySelector(".game")
const resultsContainer = document.querySelector(".results")
let playerScore = 0
let itemNumber
let itemName

playerScoreContainer.textContent = playerScore

items.forEach((item) => {
  item.addEventListener("click", () => {
    chooseItem(item)
  })
})

function chooseItem(item) {
  getItemsNumber()
  itemName = item.dataset.item
  gameContainer.classList.add("hide")
  resultsContainer.classList.remove("hide")
  showResults(itemName, itemsTabs[itemNumber])
}

function getItemsNumber() {
  itemNumber = Math.floor(Math.random() * 5)
}

// Show results
const playerArea = document.querySelector(".player-area")
const computerArea = document.querySelector(".computer-area")
const playAgainBtn = document.querySelector(".play-again-btn")
const resultTxt = document.querySelector(".result-txt")

function showResults(playerItem, computerItem) {
  const playerItemContainer = playerArea.querySelector(".item")
  playerItemContainer.setAttribute("class", `item ${playerItem}`)

  const playerItemCircle = playerItemContainer.querySelector(".circle")

  const playerPickedImg = playerItemCircle.querySelector(".item-img")
  playerPickedImg.src = `./images/icon-${playerItem}.svg`
  playerPickedImg.alt = playerItem

  const computerItemContainer = computerArea.querySelector(".item")
  computerItemContainer.setAttribute("class", `item ${computerItem}`)

  const computerItemCircle = computerItemContainer.querySelector(".circle")

  const computerPickedImg = computerItemCircle.querySelector(".item-img")
  computerPickedImg.src = `./images/icon-${computerItem}.svg`
  computerPickedImg.alt = computerItem

  setTimeout(() => {
    showWinner(
      playerItem,
      computerItem,
      playerItemContainer,
      computerItemContainer
    )
  }, 1000)

  playAgainBtn.addEventListener("click", () => {
    gameContainer.classList.remove("hide")
    resultsContainer.classList.add("hide")
    resultTxt.textContent = ""
  })
}

const results = {
  paper: {
    paper: "equality",
    rock: "you win",
    spock: "you win",
    scissors: "you lose",
    lizard: "you lose",
  },
  scissors: {
    scissors: "equality",
    paper: "you win",
    lizard: "you win",
    rock: "you lose",
    spock: "you lose",
  },
  rock: {
    rock: "equality",
    scissors: "you win",
    lizard: "you win",
    paper: "you lose",
    spock: "you lose",
  },
  lizard: {
    lizard: "equality",
    paper: "you win",
    spock: "you win",
    scissors: "you lose",
    rock: "you lose",
  },
  spock: {
    spock: "equality",
    scissors: "you win",
    rock: "you win",
    paper: "you lose",
    lizard: "you lose",
  },
}

function showWinner(
  playerItem,
  computerItem,
  playerItemContainer,
  computerItemContainer
) {
  const result = results[playerItem][computerItem]
  resultTxt.textContent = result
  if (result === "you win") {
    increaseScore()
    playerItemContainer.classList.add("winner")
    playerArea.style.zIndex = 0
    computerArea.style.zIndex = 5
  }
  if (result === "you lose") {
    computerItemContainer.classList.add("winner")
    computerArea.style.zIndex = 0
    playerArea.style.zIndex = 5
  }
}

function increaseScore() {
  playerScore++
  playerScoreContainer.textContent = playerScore
}

// Rules
const rulesBtn = document.querySelector(".rules-btn")
const rulesImg = document.querySelector(".rules-img-container")
const rulesContent = document.querySelector(".rules-img-content")
const closeRulesBtn = document.querySelector(".rules-img-close-btn")

rulesImg.addEventListener("click", () => {
  rulesImg.classList.add("hide")
})

rulesContent.addEventListener("click", (e) => {
  e.stopPropagation()
})

rulesBtn.addEventListener("click", () => {
  rulesImg.classList.remove("hide")
})

closeRulesBtn.addEventListener("click", () => {
  rulesImg.classList.add("hide")
})
