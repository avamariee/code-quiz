// variable to select the start button
var startButton = document.getElementById("start-btn");
var startText = document.getElementById("start-text");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question")
var choiceButtonEl = document.getElementById("choices")



// variable to keep track of time left
var timeLeft = 75;

// variable to keep track of the user's score
var scoreTracker = 0;


// function to start the game
function startGame() {

    //code to start game here
    console.log("It works!");
    // add code to hide start button & start text after pressing it
    startButton.classList.add("hide");
    startText.classList.add("hide");
    // add code to display question container element
    questionContainerEl.classList.remove("hide");

    displayQuestion()

}

// eventListener to start the quiz when the button is pushed
startButton.addEventListener("click", startGame);


// quiz questions array
var questions = [

    {
        Q: "Which of the following data type uses true/false logic?",
        choices: [

            { choice: "String.", correct: false },
            { choice: "Number.", correct: false },
            { choice: "Array.", correct: false },
            { choice: "Boolean.", correct: true }
        ]
    },
    {
        Q: "What do you use to print data in the console?",
        choices: [

            { choice: "addEventListener.", correct: false },
            { choice: "console.log()", correct: true },
            { choice: "getElementById", correct: false },
            { choice: "Math.floor", correct: false }
        ]
    },
    {
        Q: "What word do you use to define a variable?",
        choices: [

            { choice: "var", correct: false },
            { choice: "let", correct: false },
            { choice: "const", correct: false },
            { choice: "All of the above.", correct: true }
        ]
    },
    {
        Q: "How do you store data in the user's browser?",
        choices: [

            { choice: "console.log", correct: false },
            { choice: "localStorage.setIem", correct: true },
            { choice: "localStorage.getItem", correct: false },
            { choice: "storeInfo", correct: false }
        ]
    }
]



// function to display each question after the start button is pressed

function displayQuestion() {

    // code to display questions

}

// function to pick the correct answer in relation to the displayed question

function questionChoices() {

  // code to display choices

}


// when game ends display final score and have user input their intials to save score in local storage

scoreTracker = timeLeft;

// display high scores


