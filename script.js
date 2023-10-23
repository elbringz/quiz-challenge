//Declares variables to be used throughout javascript code
var startButton = document.querySelector('.button');
var timerElement = document.querySelector('.timer-count');
var questionsEl = document.querySelector('.questions');
var indexQuestion = 0;
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceButtons = document.querySelectorAll('.choices');
var q = '';
var initSubmitBtn = document.querySelector('.initSubmit');
var initText = document.querySelector('.initText');
var highScore = JSON.stringify(score) + initText;
var highScoreText = document.querySelector('.display-scores');
//Object to store and access questions and answers
var quizQuestions = [
    {
        question: 'Which HTML element contains the Javascript file?',
        choiceA: '<j>',
        choiceB: '<script>',
        choiceC: '<javascript>',
        answer: 'B'
    },
    {
        question: 'To make a function work you must first ___ the function.',
        choiceA: 'call',
        choiceB: 'start',
        choiceC: 'justify',
        answer: 'A'
    },
    {
        question: 'True and false are called ___ values.',
        choiceA: 'real',
        choiceB: 'positive and negative',
        choiceC: 'boolean',
        answer: 'C'
    },
    {
        question: 'What do you call text wrapped in quotes?',
        choiceA: 'A string',
        choiceB: 'A value',
        choiceC: 'An array',
        answer: 'A'
    },
    {
        question: 'What method is used to get a random value in Javascript?',
        choiceA: 'scramble()',
        choiceB: 'math.random()',
        choiceC: 'generate-random',
        answer: 'B'
    },
];

var lastIndexQuestion = quizQuestions.length - 1;

var timer;
var timerCount;
//function that starts the game
function startGame() {
var buttonList = document.querySelectorAll('.choices')
buttonList.forEach(button =>{
    button.style.display='inline';
})
timerCount = 20;
startButton.disabled = true;
startTimer()
q = generateQuestions(q)
}


//function that starts the timer when the game starts
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0 || score > 40) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}
//function that generates the questions and answers when the game starts
function generateQuestions(q) {
q = quizQuestions.pop();
questionsEl.textContent = q.question;
choiceA.textContent = q.choiceA;
choiceB.textContent = q.choiceB;
choiceC.textContent = q.choiceC;
document.querySelector('.answer-status').textContent = '';
if(timerCount === 0 || score === 50 || q >= quizQuestions.length){
    gameOver();
    
} else{
return q;
}
}
var score = 0;
//function that checks the answer when a button is clicked
function checkAnswer(answer) {
var test = q.answer;
if(answer == q.answer) {
score +=10;
if(quizQuestions.length > 0) {
q = generateQuestions(q);
} else{
    quizQuestions[0] = -1;
}
}else if(quizQuestions[0] == -1 || score === 50 || timerCount === 0) {
    gameOver();
    buttonList.forEach(button =>{
        button.style.display='none';
    })
    return;
} else {
    answerWrong();
}
}
    
//function that subtracts time and score when answer is wrong
function answerWrong(){
    timerCount --;
    score --;
    document.querySelector('.answer-status').textContent = 'Incorrect (-1 second)';
}
//function that saves score and disables the answer buttons when the game is over
function gameOver() {
    choiceButtons.forEach(buttonDisable => {
        buttonDisable.disable = true;
    })
    var scoreText = document.querySelector('.user-score')
    scoreText.textContent = 'Your score: ' + score;
    localStorage.setItem('Score', JSON.stringify(score));


}
//controls answer check when buttons are clicked
function buttonController(){
choiceButtons[0].addEventListener('click', lambda = A => checkAnswer('A'));
choiceButtons[1].addEventListener('click', lambda = B => checkAnswer('B'));
choiceButtons[2].addEventListener('click', lambda = C => checkAnswer('C'));
if(score === 50 || timerCount === 0){
    buttonList.forEach(button =>{
        button.style.display='none';
    })
    return;
}
}
//saves initials to local storage when submit button is clicked
function submit() {
    localStorage.setItem('User', initText.value);
}
//Shows highscore when button is clicked
function generateScores() {
highScoreText.textContent = 'User: ' + localStorage.getItem('User') + ' Score: ' + localStorage.getItem('Score');
}
buttonController();
startButton.addEventListener('click', startGame);
