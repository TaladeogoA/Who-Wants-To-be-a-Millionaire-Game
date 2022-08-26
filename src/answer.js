// ==================================================== //
// ==== This file contains all the functions that === //
// ==== handles the answer ========================= //
// ================================================ //


// ==== Audio/Sounds ==== //
import {
  letsPlayAudio,
  selectedAnswerAudio,
  correctAnswerAudio,
  wrongAnswerAudio
} from "./audio.js";

import {
  displayNextQuestion
} from "./question.js";


let currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

// ==== Function to introduce delay ==== //
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// ================================= //
// ==== Handle Answer Function ==== //
// =============================== //
async function handleAnswer(e) {
  // console.log("🚀 ~ handleAnswer is running", handleAnswer);
  
  // ==== Get audio boolean from localStorage ==== //
  let playAudio = JSON.parse(localStorage.getItem('playAudio'));
  
  const selectedAnswer = e.target.dataset.id;
  let options = document.getElementsByClassName("options");
  options = Array.from(options);
  const currentAnswer = currentQuestion.correct;

  if (playAudio) {
    letsPlayAudio.pause();
    selectedAnswerAudio.play();
  }
  options[selectedAnswer].classList.add("selected-answer");

  await delay(2000);
  
  console.log(playAudio)

  if (selectedAnswer != currentAnswer) {
    options[selectedAnswer].classList.replace(
      "selected-answer",
      "wrong-answer"
    );
    selectedAnswerAudio.pause();
    if (playAudio) wrongAnswerAudio.play();
    await delay(2000);
    endGame();
  } else {
    options[selectedAnswer].classList.remove("selected-answer");
    options[selectedAnswer].classList.add("correct-answer");
    selectedAnswerAudio.pause();
    if (playAudio) correctAnswerAudio.play();
    await delay(6000);
    displayNextQuestion();
  }
}

export {
  handleAnswer
}