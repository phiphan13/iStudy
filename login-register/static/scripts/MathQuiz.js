var arr = ['+', '-', '*', '/'];
var correct;
var checkin = 0;
var totalNum=0;
var score=0;


function vibration() {
  navigator.vibrate(500);
}


function next() {
  //RESETS
  document.getElementById('pablo').innerHTML = "";
  document.querySelector('emojie').innerHTML = "";
  document.querySelector('#luis').innerHTML = "";
 

  var fir= Math.floor(100 * Math.random());
  var sec = Math.floor(100 * Math.random());
  var thir = Math.floor(4 * Math.random());
  var operation = arr[thir];
  totalNum++;
  document.getElementById('ques').innerHTML = "What is " + fir + operation + sec + " ?";
  if (operation == '+') {
    correct = fir + sec;
  } else if (operation == '-') {
    correct = fir - sec;
  } else if (operation == '*') {
    correct = fir * sec;
  } else {
    correct = (fir / sec).toFixed(2);
  }

}

function check() {
  var a = document.getElementById('ans').value;
  if (Number(a) == correct) {
    document.querySelector('emojie').innerHTML = "&#128540;";
    document.querySelector('#luis').innerHTML = "Good job, your answer is correct!";
    document.querySelector('#luis').style.color = 'blue';
    checkin++;
    score++;
  } else {
    document.querySelector('emojie').innerHTML = "&#128524;";
    document.querySelector('#luis').innerHTML = "Try again, your answer is incorrect!";
    document.querySelector('#luis').style.color = 'red';
    vibration();

  }
  document.getElementById('pablo').innerHTML = "Correct answer is " + correct;
  document.getElementById('score').innerHTML = "Score:" + score;

}

function checky() {

  document.getElementById('pablo').innerHTML = "Correct answer is " + correct;
}
