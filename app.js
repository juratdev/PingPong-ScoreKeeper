const playerCounterOne = document.querySelector("#player1"),
  playerCounterTwo = document.querySelector("#player2"),
  scoreSetter = document.querySelector("#gameLevel"),
  btnOne = document.querySelector("#btnPlayer1"),
  btnTwo = document.querySelector("#btnPlayer2"),
  reset = document.querySelector("#reset")

// Function For First counter
function scoreKeeperOne() {
  if (
    playerCounterOne.innerHTML < +scoreSetter.value &&
    playerCounterTwo.innerHTML < +scoreSetter.value
  ) {
    playerCounterOne.innerHTML++
    console.log("hello1")
  }
  if (playerCounterOne.innerHTML == +scoreSetter.value &&
    playerCounterTwo.innerHTML < +scoreSetter.value) {
    playerCounterOne.style.color = 'green'
    playerCounterTwo.style.color = 'red'
  }
}

// Function For Second counter
function scoreKeeperTwo() {
  if (
    playerCounterTwo.innerHTML < +scoreSetter.value &&
    playerCounterOne.innerHTML < +scoreSetter.value
  ) {
    playerCounterTwo.innerHTML++
    console.log("hello2")
  }
  if (playerCounterTwo.innerHTML == +scoreSetter.value &&
    playerCounterOne.innerHTML < +scoreSetter.value) {
    playerCounterTwo.style.color = 'green'
    playerCounterOne.style.color = 'red'
  }
}
// Function resetter
function resetter() {
  playerCounterTwo.innerHTML = 0
  playerCounterOne.innerHTML = 0
  playerCounterOne.style.color = 'black'
  playerCounterTwo.style.color = 'black'
}

// Buttons' movement
btnOne.addEventListener("click", () => {
  scoreKeeperOne()
})
btnTwo.addEventListener("click", () => {
  scoreKeeperTwo()
})

// Resetter Movement
reset.addEventListener(('click'), () => {
  resetter()
})

// Changing the goal and cleaning the score
scoreSetter.addEventListener(('click'), () => {
  resetter()
})