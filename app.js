let arrayOfWords = ["Investment Banking", "Merchant Services", "Treasury and Payments", "Commercial Banking", "Commercial Card"];

let countOfWord = 0;

let indexInWord = 0;

let currentText = "";

let letter = "";


(function type(){
  if(countOfWord === arrayOfWords.length){
    //at the end of the array
    countOfWord = 0; //reset
  }

  currentText = arrayOfWords[countOfWord];
  letter = currentText.slice(0, ++indexInWord);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length){
    countOfWord++;
    indexInWord = 0;
  }

  setTimeout(type, 100);

}());



