const questions =[
    {
        question: "what is the largest animal in the world?",
        answers: [
            {text: "shark", correct:  false},
            {text: "Elephant", correct:  false},
            {text: "blue whatle", correct:  true},
            {text: "Giraffe", correct:  false},        
        ]
    },
    {
        question: "what is the largest desertl in the world?",
        answers: [
            {text: "kalahari", correct:  false},
            {text: "Gobi", correct:  false},
            {text: "sahara", correct:  false},
            {text: "Antarctica", correct:  true},        
        ]
    },
    {
        question: "what is the largest animal in the world?",
        answers: [
            {text: "shark", correct:  false},
            {text: "Elephant", correct:  false},
            {text: "blue whatle", correct:  true},
            {text: "Giraffe", correct:  false},        
        ]
    },
    {
        question: "what is the largest continent in the world?",
        answers: [
            {text: "Africa", correct:  false},
            {text: "Asia", correct:  true},
            {text: "Australia", correct: false},
            {text: "arctic", correct:  false},        
        ]
    }
];
const questionElement = document.querySelectorById("#question");
const answerbutton = document.querySelectorById("#answer-buttons");
const nextbutton = document.querySelectorById("#next-button");

let currentQuestionIndex=0;
let score =0;

function startquiz(){
    currentQuestionIndex = 0;
    score=0;
    nextbutton.innerHTML = "next",
    showQuestion();
}