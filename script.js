
var startButton = document.querySelector('.button');
var timerElement = document.querySelector('.timer-count');
var questionsEl = document.querySelector('.questions');

var quizQuestions = ['']

var timer;
var timerCount;

function startGame() {
timerCount = 75;
startButton.disabled = true;
startTimer()
}



function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function showQuestions() {

}

startButton.addEventListener('click', startGame);