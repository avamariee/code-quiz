// variable to select the start button
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");

// eventListener to start the quiz when the button is pushed
startButton.addEventListener("click", startGame);

//variable to select body for DOM manipulation

var body = document.body;

// variable to keep track of the user's score
var scoreTracker = 0;

// quiz questions array
var questions = [

    {
        Q: "Which of the following data type uses true/false logic?",
        choices: ["String.", "Number.", "Array.", "Boolean."],
        answer: "Boolean."
    },
    {
        Q: "What do you use to print data in the console?",
        choices: ["addEventListener.", "console.log()", "getElementById", "Math.floor"],
        answer: "console.log"
    },
    {
        Q: "What word do you use to define a variable?",
        choices: ["var", "let", "const", "all of the above."],
        answer: "all of the above."
    },
    {
        Q: "How do you store data in the user's browser?",
        choices: ["console.log", "localStorage.setIem", "localStorage.getItem", "storeInfo"],
        answer: "localStorage.setItem"
    }
]

// variable to keep track of time left
var timeLeft = 75;

// function to start the game
function startGame() {

    //code to start game here
    console.log("It works!")
    displayQuestion()

    // add code to hide start button after pressing it
    // add code to display question container element


}

// function to display each question after the start button is pressed

function displayQuestion() {

    // code to display questions
    
    // code to display choices

}

// function to pick the correct answer in relation to the displayed question

function questionAnswer() {


}

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


