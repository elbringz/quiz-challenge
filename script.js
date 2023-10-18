
var startButton = document.querySelector('.button');
var timerElement = document.querySelector('.timer-count');

var timer;
var timerCount;

function startGame() {
timerCount = 75;
startButton.disabled = true;
startTimer()
}

startButton.addEventListener('click', startGame);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textcontent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}