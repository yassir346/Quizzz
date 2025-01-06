const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

const Question = document.getElementById('question');
const trueBTN = document.getElementById('true-btn');
const falseBTN = document.getElementById('false-btn');
const score = document.getElementById('score');

let index = 0;
let Score = 0;

function questionFiller(){
  Question.innerHTML = questions[index++].question;
};

questionFiller();



trueBTN.addEventListener("click", function(){

  if(questions[index].answer == trueBTN.innerHTML){
    Score = Score++;
  }

  if(index <= questions.length){
  Question.innerHTML = questions[index++].question;
}

else{
  Question.innerHTML = `"Vous avez terminez le Quiz avec le score de" ${Score}`;
}

})



falseBTN.addEventListener("click", function(){

  if(questions[index].answer == trueBTN.innerHTML){
    Score = Score;
  }

  if(index <= questions.length){
  Question.innerHTML = questions[index++].question;
}

else{
  Question.innerHTML = "Vous avez terminez le Quiz avec le score de ${Score} " ;
}


})

// function passQuestions(){
//     const output = [];

//     questions.forEach(
//         (currentQuestion, questionNumber) => {

//             const answers = [];
//             for(letter in questions.answer){

//                 answers.push(
//                   `<label>
//                     <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} :
//                     ${questions.answer[letter]}
//                   </label>`
//                 );
//               }
//                  output.push(
//                 `<div class="question"> ${questions.question} </div>
//                 <div class="answers"> ${answer.join('')} </div>`
//               );
//             }
//          )
//          Question.innerHTML = output.join('');
//         }


// function showResults(){

     
//         const answerContainers = quizContainer.querySelectorAll('.answers');
          

//         let numCorrect = 0;
          
     
//         questions.forEach( (currentQuestion, questionNumber) => {
          
        
//               const answerContainer = answerContainers[questionNumber];
//               const selector = `input[name=question${questionNumber}]:checked`;
//               const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          

//               if(userAnswer === currentQuestion.correctAnswer){
    
//                 numCorrect++;
          

//                 answerContainers[questionNumber].style.color = 'lightgreen';
//               }

//               else{

//                 answerContainers[questionNumber].style.color = 'red';
//               }
//             });

//             resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
//           }

