// 1. Get DOM elements
const alert = document.querySelector("#alert");
const quizForm = document.querySelector("#quiz-form");
const questionitems = document.querySelectorAll(".question-item");
const answerItems = document.querySelectorAll(".answer-item");
const answers = document.querySelectorAll(".answer");
const checkButton = document.querySelector("button");

// When check button is clicked..
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  answers.forEach((answer) => {
    // 2. Check which answer has been checked.
    // 3. If answer is incorrect, text will change to red.
    if (answer.checked && answer.value == "false") {
      // Traverse to the current child closest grandparent named "question-item"
      answer.closest(".question-item").classList.add("incorrect");
    }
    // 4. If answer is correct, text will change to green.
    if (answer.checked && answer.value == "true") {
      // Traverse to the current child closest grandparent named "question-item"
      answer.closest(".question-item").classList.add("correct");
    }
    // 5. If all answers are correct, activate alert.
  });
});

// Helper functions

function allCorrect() {}
