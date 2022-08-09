//1. First get json data from the URL using fetch API
//2. Combine all the question sets into one array
// 3. Create function that randomly selects a question object from the array
//4. Create a function that will take the question object and create a question card
//5. Create a function that will take the question card and display it on the page

// JSON structure is {games : [set 1], [set 2], [set 3], [set 4], [set 5]}  //5 arrays of questions
// Sets array structure is {questions : [question 1], [question 2], [question 3], [question 4], [question 5] ... [question 15]}

// Get the data from the URL
async function getQuestions() {
  let URL =
    "https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json";

  try {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//getQuestions().then((data) => console.log(data));

//Try IIFE to make the code more readable
// (async function() {
//   const data = await getQuestions();
//   console.log(data);
// })();

// Merge all the question sets into one array
async function mergeQuestionSets() {
  let data = await getQuestions();
  let questions = [];
  for (let i = 0; i < data.games.length; i++) {
    questions = questions.concat(data.games[i].questions);
  }

  return questions;
}

const letsPlayBtn = document.getElementById("lets-play");
const letsPlayAudio = document.getElementById("lets-play-audio");
const welcomeSection = document.querySelector(".welcome-container");
const selectedAnswerAudio = document.getElementById("selected-answer-audio");
const correctAnswerAudio = document.getElementById("correct-answer-audio");
const wrongAnswerAudio = document.getElementById("wrong-answer-audio");

// Start the game
letsPlayBtn.addEventListener("click", function () {
  displayQuestion();
  letsPlayAudio.play();

  welcomeSection.classList.replace("h-screen", "h-0");
  letsPlayBtn.style.display = "none";
  document.querySelector(".question-container").style.display = "flex";
});

// Get a random question from the array
async function getRandomQuestion() {
  let questions = await mergeQuestionSets();
  let randomIndex = Math.floor(Math.random() * questions.length);

  return questions[randomIndex];
}

// Display the question on the page
async function displayQuestion() {
  resetState();
  let questionObject = await getRandomQuestion();
  console.log(questionObject);

  let questionCard = document.getElementById("question-card");
  questionCard.innerHTML = `<h2>${questionObject.question}</h2>`;

  let option1 = document.getElementById("option-one");
  let option2 = document.getElementById("option-two");
  let option3 = document.getElementById("option-three");
  let option4 = document.getElementById("option-four");

  option1.innerHTML = `
    <span class="text-orange font-bold mr-1">A:</span>
    <span>${questionObject.content[0]}</span>
  `
  option2.innerHTML = `
    <span class="text-orange font-bold mr-1">B:</span>
    <span>${questionObject.content[1]}</span>
    `
  option3.innerHTML = `
    <span class="text-orange font-bold mr-1">C:</span>
    <span>${questionObject.content[2]}</span>
    `
  option4.innerHTML = `
    <span class="text-orange font-bold mr-1">D:</span>
    <span>${questionObject.content[3]}</span>
    `

  correctAnswer(questionObject); //call the function to decide if answer is correct or not
}

// function to introduce delay, then execute
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function correctAnswer(questionObject) {
  // If user clicks correct answer, change the background color of the option to green, else change it to red
  // let questionObject = await getRandomQuestion();
  let options = document.getElementsByClassName("options");
  let correctAnswerIndex = questionObject.correct;
  console.log(correctAnswerIndex);

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", async function () {
      letsPlayAudio.pause();
      selectedAnswerAudio.play();
      options[i].classList.add("selected-answer");
      
      await delay(2000);
      (async function () {
        if (i == correctAnswerIndex) {
          //if the user selects the correct answer
          options[i].classList.replace("selected-answer", "correct-answer");
          selectedAnswerAudio.pause();
          correctAnswerAudio.play();
          await delay(6000);
          (function () {
            resetState();
            displayNextQuestion();
          })()
          
        } else {
          options[i].classList.replace("selected-answer", "wrong-answer");
          // options[i].classList.remove('options');
          selectedAnswerAudio.pause();
          wrongAnswerAudio.play();
          await delay(2000);
          (function () {
            endGame();
          }) ();
        }
      })()
    });
  }
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

function displayNextQuestion() {
  displayQuestion();
  letsPlayAudio.play();
}

function endGame() {
  // Display the end game screen
}

// Play Lifeline Audio on hover
const firstPing = document.getElementById("first-ping");
const secondPing = document.getElementById("second-ping");
const thirdPing = document.getElementById("third-ping");
const fiftyFifty = document.getElementById("fifty-fifty");
const phoneAFriend = document.getElementById("phone-a-friend");
const askTheAudience = document.getElementById("ask-the-audience");

fiftyFifty.addEventListener("mouseover", function () {
  firstPing.play();
});
fiftyFifty.addEventListener("mouseout", function () {
  firstPing.pause();
  firstPing.currentTime = 0;
});

phoneAFriend.addEventListener("mouseover", function () {
  secondPing.play();
});
phoneAFriend.addEventListener("mouseout", function () {
  secondPing.pause();
  secondPing.currentTime = 0;
});

askTheAudience.addEventListener("mouseover", function () {
  thirdPing.play();
});
askTheAudience.addEventListener("mouseout", function () {
  thirdPing.pause();
  thirdPing.currentTime = 0;
});
