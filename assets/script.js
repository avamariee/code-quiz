// variable to select the initial screen's text
var startText = document.getElementById("start-text");

// variable to select the start button
var startButton = document.getElementById("start-btn");

// variable to select the next button
var nextButton = document.getElementById("next-btn");

// variable to select the question container div
var questionContainerEl = document.getElementById("question-container");

// variable to select the question div
var questionEl = document.getElementById("question")

// variable to select the choices div
var choiceEl = document.getElementById("choices")

// variable to select the choice buttons
var choiceButtonEl = document.getElementById("choice-btn")

// variable to shuffle questions
let shuffledQuestions, currentQuestionIndex

// variable to keep track of time left
var timeLeft = 75;

// variable to keep track of the user's score
var scoreTracker = 0;

// varaible for correct sound effect
var correctSound = document.getElementById("correct-sound")

//variable for incorrect sound
var incorrectSound = document.getElementById("incorrect-sound")

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

console.log(questions[0].choices[1].choice)
// function to start the quiz
function startQuiz() {

    console.log("It works!");
    // add code to hide start button & start text after pressing it
    startButton.classList.add("hide");
    startText.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    // add code to display question container element
    questionContainerEl.classList.remove("hide");
    displayNextQuestion();



}

// function to display each question after the start button is pressed

function displayNextQuestion() {

    console.log(shuffledQuestions, currentQuestionIndex)

    displayQuestion(shuffledQuestions[currentQuestionIndex])
    questionChoices(questions.choices)



}

function displayQuestion(questions) {

    questionEl.innerText = questions.Q


}

// function to pick the correct answer in relation to the displayed question

function questionChoices() {

    // check if currentQuestionIndex > length of the questions (stop condition), if greater than, stop the timer/clock. 
    if (currentQuestionIndex > questions.length) {

        endQuiz();

    } else {

        document.getElementById("choices").innerText = ""

        // create for loop to go over choices

        for (let j = 0; j < 4; j++) {

            // console.log(questions[0].choices[j].choice)
            // console.log(j)

            // create a button with event listener, append it to id of "choices"
            const choiceBtn = document.createElement("button")
            choiceBtn.classList.add("choice-btn")
            choiceBtn.setAttribute("id", j)
            // choiceBtn.setAttribute("id", questions[currentQuestionIndex].choices[j].choice)
            choiceBtn.innerText = questions[currentQuestionIndex].choices[j].choice
            choiceBtn.addEventListener("click", function () {


                var questionAnswer = (questions[currentQuestionIndex].choices[choiceBtn.id].correct)

                console.log(currentQuestionIndex)


                if (questionAnswer === true) {

                    let correctMsg = document.createElement("h2")
                    correctMsg.classList.add("correct")
                    correctMsg.innerText = "Correct!"
                    document.getElementById("choices").appendChild(correctMsg)
                    correctSound.play();


                } else {

                    let incorrectMsg = document.createElement("h2")
                    incorrectMsg.classList.add("incorrect")
                    incorrectMsg.innerText = "Incorrect! -10 seconds."
                    document.getElementById("choices").appendChild(incorrectMsg)
                    incorrectSound.play();

                }

                setTimeout(function () {

                    displayNextQuestion(currentQuestionIndex++);


                }, 1000)



            })
            document.getElementById("choices").appendChild(choiceBtn)

            // // on click event for the buttons, true/false logic, add currentQuestionIndex++, call questionChoices() again from function 
        }





    }



}







// function to end the quiz

function endQuiz() {




}


// function to display user's score

function displayScores() {

    // when game ends display final score and have user input their intials to save score in local storage

    scoreTracker = timeLeft;
}


// eventListener to start the quiz when the button is pushed
startButton.addEventListener("click", startQuiz);


// display high scores


