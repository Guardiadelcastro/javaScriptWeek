/*** index.js ***/
var history = [];

var button1 = document.getElementById('button1');
button1.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  history.push(result);
  var diceNum = document.getElementById('number1');
  diceNum.textContent = result;
  var results1 = document.getElementById('results1');
  results1.textContent = history;
};

var button2 = document.getElementById('button2');
button2.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  var diceNum = document.getElementById('number2');
  diceNum.textContent = result;
};

var button3 = document.getElementById('button3');
button3.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  var diceNum = document.getElementById('number3');
  diceNum.textContent = result;
};

