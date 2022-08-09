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

async function displayNextQuestion() {
  console.log("🚀 ~ displayNextQuestion is running", displayNextQuestion);
  resetState();
  const question = await getRandomQuestion();
  displayQuestion(question);
}

function displayQuestion(questionObject) {
  console.log("🚀 ~ displayQuestion is running", displayQuestion);

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
}

// Reset the state of the game
function resetState() {
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
