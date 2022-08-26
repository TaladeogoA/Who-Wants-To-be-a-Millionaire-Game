// ====================================================== //
// ==== This file contains all game state functions  === //
// ==================================================== //

// ==== Audios/Sounds ==== //
import {
  letsPlayAudio,
} from "./audio.js";

// ==== Pages/Sections ==== //
import {
  welcomeSection,
  questionSection
} from "./page.js";

// ==== Buttons ==== //
import {
  letsPlayBtn
} from "./button.js";

// ==== Question Function ==== //
import {
  displayNextQuestion
} from "./question.js";



// ============================== //
// ==== Start Game Function ==== //
// ============================ //
function startGame() {
  // console.log("🚀 ~ startGame is starting", startGame);
  letsPlayAudio.play();
  welcomeSection.classList.replace("h-screen", "h-0");
  letsPlayBtn.style.display = "none";
  questionSection.style.display = "flex";
  displayNextQuestion();
}

// ============================ //
// ==== End Game Function ==== //
// ========================== //
function endGame() {
  console.log("🚀 ~ endGame is running", endGame);
  // console.log("The game is over");
}

// =============================== //
// ==== Reset State Function ==== //
// ============================= //
function resetState() {
  // ==== Clear options ==== //
  let options = document.getElementsByClassName("options");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected-answer");
    options[i].classList.remove("correct-answer");
    options[i].classList.remove("wrong-answer");
    options[i].classList.add("options");
  }
}

export {
  startGame,
  endGame,
  resetState
}