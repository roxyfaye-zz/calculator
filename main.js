var display = document.getElementById('answer');

//var operatorArrays = document.getElementsByClassName('math');

//operatorArray[0].value = C;
//operatorArray[1].value = "/";
//operatorArray[2].value = X;
//operatorArray[3].value = "-";
//operatorArray[4].value = "*";
//operatorArray[5].value = "-";
//operatorArray[6].value = ".";
//operatorArray[7].value = "=";
//operatorArray[8].value = "+";

var numbersArray = document.getElementsByClassName('number');

numbersArray[0].value = 7;
numbersArray[1].value = 8;
numbersArray[2].value = 9;
numbersArray[3].value = 4;
numbersArray[4].value = 5;
numbersArray[5].value = 6;
numbersArray[6].value = 1;
numbersArray[7].value = 2;
numbersArray[8].value = 3;
numbersArray[9].value = 0;


for(let i = 0; i < numbersArray.length; i++) {

    numbersArray[i].addEventListener("click", function(){
  
    display.innerHTML=numbersArray[i].value;

    console.log(numbersArray[i].value);

});
}



