
var startButton = document.querySelector('.button');
var timerElement = document.querySelector('.timer-count');
var questionsEl = document.querySelector('.questions');
var indexQuestion = 0;
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
let quizQuestions = [
    {
        question: 'What HTML element contains Javascript?',
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

function startGame() {
timerCount = 75;
startButton.disabled = true;
startTimer()
generateQuestions(console.log)
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

function generateQuestions() {
let q = quizQuestions[indexQuestion];
questionsEl.innerHTML = '<h2>' + q.question + '<h2>';
choiceA.textContent = q.choiceA;
choiceB.textContent = q.choiceB;
choiceC.textContent = q.choiceC;
}

startButton.addEventListener('click', startGame);