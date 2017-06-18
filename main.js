var display = document.getElementById('answer');

var displayString = "";

var clearButton = document.getElementById('clear');

var operatorsArray = document.getElementsByClassName('operator');

var numbersArray = document.getElementsByClassName('number');

function updateDisplayScreen(newChar) {

    displayString += newChar;

    display.innerHTML = displayString;

}

function handleClearPress(event) {

    displayString = "";

    display.innerHTML = displayString;

}

function handleNumberPress(event) {

    var numberThatWasPressed = event.target;

    updateDisplayScreen(numberThatWasPressed.innerHTML);

}

function handleOperatorPress(event) {

    var operatorPress = event.target;

    updateDisplayScreen(operatorPress.innerHTML);

}

for (let i = 0; i < numbersArray.length; i++) {

    numbersArray[i].addEventListener("click", handleNumberPress);
}

for (let i = 0; i < operatorsArray.length; i++) {

    operatorsArray[i].addEventListener("click",handleOperatorPress);

}

clearButton.addEventListener("click", handleClearPress);






///push values into the string when the "click" function is run (concatonate?) then 
// eval() that string.