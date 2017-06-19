var display = document.getElementById('answer');

var displayString = "";

var clearButton = document.getElementById('clear');

var operatorsArray = document.getElementsByClassName('operator');

var numbersArray = document.getElementsByClassName('number');

var equals = document.getElementById('equals');



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

function handleEqualPress(event) {
    
    var equals = event.target;
    var total = eval(displayString);
    display.innerHTML = total;
    

}

for (let i = 0; i < numbersArray.length; i++) {

    numbersArray[i].addEventListener("click", handleNumberPress);
}

for (let i = 0; i < operatorsArray.length; i++) {

    operatorsArray[i].addEventListener("click",handleOperatorPress);

}

clearButton.addEventListener("click", handleClearPress);
equals.addEventListener("click", handleEqualPress);






///push values into the string when the "click" function is run (concatonate?) then 
// eval() that string.