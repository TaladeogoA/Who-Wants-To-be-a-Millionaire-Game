//1. First get json data from the URL using fetch API
//2. Combine all the question sets into one array
//3. Create function that randomly selects a question object from the array
//4. Create a function that will take the question object and create a question card
//5. Create a function that will take the question card and display it on the page

// Buttons
const letsPlayBtn = document.getElementById("lets-play");
const letsPlayAudio = document.getElementById("lets-play-audio");
const welcomeSection = document.querySelector(".welcome-container");
const selectedAnswerAudio = document.getElementById("selected-answer-audio");
const correctAnswerAudio = document.getElementById("correct-answer-audio");
const wrongAnswerAudio = document.getElementById("wrong-answer-audio");

letsPlayBtn.addEventListener("click", startGame);

function startGame() {
  // console.log("🚀 ~ startGame is starting", startGame);
  letsPlayAudio.play();
  welcomeSection.classList.replace("h-screen", "h-0");
  letsPlayBtn.style.display = "none";
  document.querySelector(".question-container").style.display = "flex";
  displayNextQuestion();
}

function endGame() {
  console.log("🚀 ~ endGame is running", endGame);
  // console.log("The game is over");
}


let currentQuestion; // make current question available to entire app

async function displayNextQuestion() {
  // console.log("🚀 ~ displayNextQuestion is running", displayNextQuestion);
  resetState();
  letsPlayAudio.play();
  const question = await getRandomQuestion();
  currentQuestion = question;
  displayQuestion(currentQuestion);
}

function displayQuestion(questionObject) {
  // console.log("🚀 ~ displayQuestion is running", displayQuestion);
  // console.log(currentQuestion);

  const questionCard = document.getElementById("question-card");
  questionCard.innerHTML = `<h2>${questionObject.question}</h2>`;

  const option1 = document.getElementById("option-one");
  const option2 = document.getElementById("option-two");
  const option3 = document.getElementById("option-three");
  const option4 = document.getElementById("option-four");

  option1.innerHTML = `
    <span class="text-orange font-bold mr-1">A:</span>
    <span>${questionObject.content[0]}</span>`;
  option2.innerHTML = `
    <span class="text-orange font-bold mr-1">B:</span>
    <span>${questionObject.content[1]}</span>`;
  option3.innerHTML = `
    <span class="text-orange font-bold mr-1">C:</span>
    <span>${questionObject.content[2]}</span>`;
  option4.innerHTML = `
    <span class="text-orange font-bold mr-1">D:</span>
    <span>${questionObject.content[3]}</span>`;

  // prepare options for click
  let options = document.getElementsByClassName("options");
  options = Array.from(options);
  options.forEach((option) => {
    option.addEventListener("click", handleAnswer);
  });
}

// function to introduce delay
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function handleAnswer(e) {
  // console.log("🚀 ~ handleAnswer is running", handleAnswer);
  const selectedAnswer = e.target.dataset.id;
  let options = document.getElementsByClassName("options");
  options = Array.from(options);
  const currentAnswer = currentQuestion.correct;

  letsPlayAudio.pause();
  selectedAnswerAudio.play();
  options[selectedAnswer].classList.add("selected-answer");

  await delay(2000);

  if (selectedAnswer != currentAnswer) {
    options[selectedAnswer].classList.replace("selected-answer", "wrong-answer");
    selectedAnswerAudio.pause();
    wrongAnswerAudio.play();
    await delay(2000);
    endGame();
  } else {
    options[selectedAnswer].classList.replace("selected-answer", "correct-answer");
    selectedAnswerAudio.pause();
    correctAnswerAudio.play();
    await delay(6000);
    displayNextQuestion();
  }

}

// Reset the state of the game
function resetState() {
  // clear options
  let options = document.getElementsByClassName("options");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected-answer");
    options[i].classList.remove("correct-answer");
    options[i].classList.remove("wrong-answer");
    options[i].classList.add("options");
  }
}

//====================//
// * Get questions * //
//====================//
// Get the data from the URL
async function getQuestions() {
  const URL = "https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Merge all the question sets into one array
async function mergeQuestionSets() {
  const data = await getQuestions();
  let questions = [];
  for (let i = 0; i < data.games.length; i++) {
    questions = questions.concat(data.games[i].questions);
  }

  return questions;
}

// Get a random question from the array
async function getRandomQuestion() {
  const questions = await mergeQuestionSets();
  const randomIndex = Math.floor(Math.random() * questions.length);

  return questions[randomIndex];
}
