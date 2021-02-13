// variable to select the start button
var startButton = document.getElementById("start-btn");

// variable to keep track of the user's score
var scoreTracker = 0;

// quiz questions array
var questions = [

    { Q: "Which of the following data type uses true/false logic?", choices: ["String.", "Number.", "Array.", "Boolean."], answer: "Boolean." },
    { Q: "What do you use to print data in the console?", choices: ["addEventListener.", "console.log()", "getElementById", "Math.floor"], answer: "console.log" },
    { Q: "What word do you use to define a variable?", choices: ["var", "let", "const", "all of the above."], answer: "all of the above." },
    { Q: "How do you store data in the user's browser?", choices: ["console.log", "localStorage.setIem", "localStorage.getItem", "storeInfo"], answer: "localStorage.setItem" }
]

// variable to keep track of time left
var timeLeft = 75;


// for loop to iterate over each question in the 'questions' array
for (let i = 0; i < questions.length; i++) {
    var question = questions[i];
    var answer = question.Q;
    // check if user's answer is correct
    if (answer === question.answer) {
        // diplay "correct" underneath quiz box

    } else {
        // display "incorrect" underneath quiz box
        timeLeft - 10
    }
}

// when game ends display final score and have user input their intials to save score in local storage

scoreTracker = timeLeft;

// display high scores

// eventListener to start the quiz when the button is pushed
startButton.addEventListener("click", function () {
    if (questions < 4 && timeLeft > 0) {

        // code to display question and choices

    }
})

