//1. First get json data from the URL using fetch API
//2. Create a function that will take the json data and create a question object
//3. Create a function that will take the question object and create a question card
//4. Create a function that will take the question card and display it on the page

// Array structure is {games : [set 1], [set 2], [set 3], [set 4], [set 5]}  //5 arrays of questions
// Sets array structure is {questions : [question 1], [question 2], [question 3], [question 4], [question 5] ... [question 15]}





URL = 'https://raw.githubusercontent.com/aaronnech/Who-Wants-to-Be-a-Millionaire/master/questions.json';



function getQuestions(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            mergeQuestionSets(data);
            // createQuestionObject(data);
        }).catch(error => console.log(error));
}

getQuestions(URL);

function mergeQuestionSets (data) {
    let questionSets = data.games; // Array of question sets
    let newQuestionsArray = []; // Array of questions

    for (let i = 0; i < questionSets.length; i++) {
        let questions = questionSets[i].questions; // Array of questions
        for (let j = 0; j < questions.length; j++) {
            newQuestionsArray.push(questions[j]);
        }
    }
    console.log(newQuestionsArray);
    
}

// function createQuestionObject (data) {
//     let questionSets = data.games;
//     console.log(questionSets);
//     for (let i = 0; i < questionSets.length; i++) {
//         let Set = questionSets[i];
//         console.log(Set);
//         // createQuestionCard(question);
//     }
// }

