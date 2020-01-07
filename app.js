const digits = document.querySelector('#digits')
const divider = document.querySelector('#divider')

const btnGenDividedNumbers = document.getElementById('btnGenDividedNumbers')
btnGenDividedNumbers.addEventListener('click', randomDividedNumbers)

const btnResult = document.getElementById('btnResult')
btnResult.addEventListener('click', getResult)

const listDividedItem = document.querySelector(".listDivededNums")
const listResult = document.querySelector(".listResult")

const randomArray = []
const resultArray = []

const randomNumbers = (numberOfDigits) => {
  firstArray.length = 0
  const multiplay = Math.pow(10, numberOfDigits)
  for (let i = 0; i < 10; i++) {
    firstArray.push(Math.floor(multiplay + Math.random() * 9 * multiplay))
  }
}

const isDivided = (numberOfDigits, dividers) => {
  const multiplay = Math.pow(10, numberOfDigits)
  let rnd = Math.floor(multiplay + Math.random() * 9 * multiplay)
  if (rnd % dividers == 0) {
    randomArray.push(rnd)
    return
  } else {
    isDivided(numberOfDigits, dividers)
  }
}

function randomDividedNumbers(numberOfDigits, dividers) {
  numberOfDigits = digits.options[digits.selectedIndex].value
  dividers = divider.options[divider.selectedIndex].value

  randomArray.length = 0
  const multiplay = Math.pow(10, numberOfDigits)
  for (let i = 0; i < 10; i++) {
    isDivided(numberOfDigits, dividers)
  }
  createList(listDividedItem, randomArray)
  listResult.textContent = ''
}

function getResult() {
  if (randomArray.length > 0) {
    dividers = divider.options[divider.selectedIndex].value
    randomArray.forEach(el => resultArray.push(el / dividers))
  }
  createList(listResult, resultArray)
  resultArray.length = 0
}

const createList = (listName, array) => {
  listName.textContent = ''
  for (let num of array) {
    listValue = document.createElement("li");
    listValue.textContent = num;
    listName.appendChild(listValue);
  }
}



