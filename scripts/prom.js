//1. First get json data from the URL using fetch API
//2. Combine all the question sets into one array
//3. Create function that randomly selects a question object from the array
//4. Create a function that will take the question object and create a question card
//5. Create a function that will take the question card and display it on the page

// Buttons
const letsPlayBtn = document.getElementById("lets-play");
const letsPlayAudio = document.getElementById("lets-play-audio");
const welcomeSection = document.querySelector(".welcome-container");

letsPlayBtn.addEventListener("click", startGame);

function startGame() {
  console.log("🚀 ~ fstartGame is starting", startGame);
  letsPlayAudio.play();
  welcomeSection.classList.replace("h-screen", "h-0");
  letsPlayBtn.style.display = "none";
  document.querySelector(".question-container").style.display = "flex";
  displayNextQuestion();
}

function displayNextQuestion() {
  resetState();
  console.log("🚀 ~ displayNextQuestion is running", displayNextQuestion);
  displayQuestion();
}
