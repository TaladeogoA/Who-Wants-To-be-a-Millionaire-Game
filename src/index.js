// ======================================================== //
// =============== PSEUDOCODE FOR THE GAME =============== //

//1. First get json data from the URL using fetch API
//2. Combine all the question sets into one array
//3. Create function that randomly selects a question object from the array
//4. Create a function that will take the question object and create a question card
//5. Create a function that will take the question card and display it on the page

// ===================================================== //


// ==== Get Audios/Sounds ==== //
import {
  letsPlayAudio
} from "./audio.js";

// ==== Get Buttons ===== //
import {
  letsPlayBtn,
  audioBtnControl
} from "./button.js";

// ==== Get Games State Functions ==== //
import {
  startGame,
  endGame
} from "./gameState.js";


// ==== Initialize boolean for audio control ==== //
let playAudio = true;
localStorage.setItem('playAudio', JSON.stringify(playAudio));

// ======================================================== //
// === Start game when user clicks [Let's Play] button === //
// ====================================================== //
letsPlayBtn.addEventListener("click", startGame);


// ======================== //
// ==== Control Audio ==== //
// ====================== //
let mute = document.querySelector(".mute");
let unmute = document.querySelector(".unmute");

audioBtnControl.addEventListener("click", () => {
  // ==== Get audio boolean from localStorage ==== //
  playAudio = JSON.parse(localStorage.getItem('playAudio'));
  
  // ==== Toggle/Revert/Change audio boolean ==== //
  playAudio = !playAudio

  // ==== Save toggled/reverted/changed audio boolean to localStorage ==== //
  localStorage.setItem('playAudio', JSON.stringify(playAudio));

  if (playAudio) {
    letsPlayAudio.play();
    unmute.classList.add("hidden");
    mute.classList.remove("hidden");
  } else {
    letsPlayAudio.pause();
    unmute.classList.remove("hidden");
    mute.classList.add("hidden");
  }
});
