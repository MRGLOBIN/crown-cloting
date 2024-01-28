const defaultResult = 0
let currentResult = 0
let logEntries = []

// Get inout from user
function getUSerNumberInput() {
  return parseInt(userInput.value)
}

// creates and logs the calculation description
function createAndWriteLog(operator, beforeResult, calcNumber) {
  const calcDescription = `${beforeResult} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)  // from vendor.js
}

function writeToLog(operationIdentifier, previousResult, number, result) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult,
    number,
    result,
  }
  logEntries.push(logEntry)
}
console.log('hello')
function add() {
  const enteredNumber = getUSerNumberInput()
  const intialResult = currentResult
  currentResult = currentResult + enteredNumber
  createAndWriteLog('+', intialResult, enteredNumber)
  writeToLog('ADD', intialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUSerNumberInput()
  const intialResult = currentResult
  currentResult = currentResult - enteredNumber
  createAndWriteLog('-', intialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUSerNumberInput()
  const intialResult = currentResult
  currentResult = currentResult * enteredNumber
  createAndWriteLog('*', intialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUSerNumberInput()
  const intialResult = currentResult
  currentResult = currentResult / enteredNumber
  createAndWriteLog('/', intialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
