// ==================================================== //
// ==== This file contains all question functions  === //
// ================================================== //

// ==== Audios/Sounds ==== //
import {
  letsPlayAudio,
} from "./audio.js";

// ==== Game State Functions ==== //
import {
  resetState
} from "./gameState.js";

import {
  handleAnswer
} from "./answer.js";

// ==== Get audio boolean from localStorage ==== //
let playAudio = JSON.parse(localStorage.getItem('playAudio'));

// ==== Get question from localStorage if any exist ==== //
let currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

// =================================================== //
// ==== This function displays the next question ==== //
// ================================================= //
async function displayNextQuestion() {
  // console.log("🚀 ~ displayNextQuestion is running", displayNextQuestion);
  resetState();
  if (playAudio) letsPlayAudio.play();
  const question = await getRandomQuestion();
  currentQuestion = question;
  
  // ==== Save current question to localStorage ==== //
  localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  displayQuestion(currentQuestion);
}


// ============================================== //
// ==== This function displays the question ==== //
// ============================================ //
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


// =============================================== //
// ==== Get a random question from the array ==== //
// ============================================ //
async function getRandomQuestion() {
  const questions = await mergeQuestionSets();
  const randomIndex = Math.floor(Math.random() * questions.length);

  return questions[randomIndex];
}


// =================================================== //
// ==== Get questions(Get the data from the URL) ==== //
// ================================================= //
async function getQuestions() {
  const URL =
    "https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


// ===================================================== //
// ==== Merge all the question sets into one array ==== //
// =================================================== //
async function mergeQuestionSets() {
  const data = await getQuestions();
  let questions = [];
  for (let i = 0; i < data.games.length; i++) {
    questions = questions.concat(data.games[i].questions);
  }

  return questions;
}

export {
  displayNextQuestion
}