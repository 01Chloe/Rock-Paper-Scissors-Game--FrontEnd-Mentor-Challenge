// Game
const items = document.querySelectorAll(".item")
let itemNumber
const itemsTabs = ["scissors", "spock", "paper", "lizard", "rock"]
const gameContainer = document.querySelector(".game")
const resultsContainer = document.querySelector(".results")

items.forEach((item) => {
  item.addEventListener("click", () => {
    chooseItem(item)
  })
})

function chooseItem(item) {
  getItemsNumber()
  let itemName = item.dataset.item
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

function showResults(playerItem, computerItem) {
  const playerItemContainer = playerArea.appendChild(
    document.createElement("div")
  )
  playerItemContainer.setAttribute("class", `item ${playerItem}`)

  const playerItemCircle = playerItemContainer.appendChild(
    document.createElement("div")
  )
  playerItemCircle.setAttribute("class", "circle")

  const playerPickedImg = playerItemCircle.appendChild(
    document.createElement("img")
  )
  playerPickedImg.src = `./images/icon-${playerItem}.svg`
  playerPickedImg.alt = playerItem

  const computerItemContainer = computerArea.appendChild(
    document.createElement("div")
  )
  computerItemContainer.setAttribute("class", `item ${computerItem}`)

  const computerItemCircle = computerItemContainer.appendChild(
    document.createElement("div")
  )
  computerItemCircle.setAttribute("class", "circle")

  const computerPickedImg = computerItemCircle.appendChild(
    document.createElement("img")
  )
  computerPickedImg.src = `./images/icon-${computerItem}.svg`
  computerPickedImg.alt = computerItem

  setTimeout(() => {
    showWinner()
  }, 3000)
}

function showWinner() {
  console.log("Winner")
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
