//1. First get json data from the URL using fetch API
//2. Combine all the question sets into one array
// 3. Create function that randomly selects a question object from the array
//4. Create a function that will take the question object and create a question card
//5. Create a function that will take the question card and display it on the page

// JSON structure is {games : [set 1], [set 2], [set 3], [set 4], [set 5]}  //5 arrays of questions
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
    let newQuestionsArray = []; // New Array of all question sets combined

    for (let i = 0; i < questionSets.length; i++) { // Loop through each question set
        let questions = questionSets[i].questions; // Get questions from question set
        for (let j = 0; j < questions.length; j++) { // Loop through each question in question set
            newQuestionsArray.push(questions[j]); // Add question to new array
        }
    }
    console.log(newQuestionsArray);
    
};



// function createQuestionObject (data) {
//     let questionSets = data.games;
//     console.log(questionSets);
//     for (let i = 0; i < questionSets.length; i++) {
//         let Set = questionSets[i];
//         console.log(Set);
//         // createQuestionCard(question);
//     }
// }

