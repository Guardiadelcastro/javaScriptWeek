/*** index.js ***/
var history = [];
var dom = {
  button1: document.querySelector('#button1'),
  button2: document.querySelector('#button2'),
  button3: document.querySelector('#button3'),
  number1: document.querySelector('#number1'),
  number2: document.querySelector('#number2'),
  number3: document.querySelector('#number3'),
};

dom.button1.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  history.push(result);
  dom.number1.textContent = result;
  var results1 = document.getElementById('results1');
  results1.textContent = history;
};

dom.button2.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  dom.number2.textContent = result;
};

dom.button3.onclick = function randomNum() {
  var result = Math.floor(Math.random() * 6 + 1); 
  console.log(result);
  if (result === 7){
    result = 6;
  }
  dom.number3.textContent = result;
};

