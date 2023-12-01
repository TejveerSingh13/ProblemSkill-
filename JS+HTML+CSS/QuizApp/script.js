const questions = [
    {
        question: 'Which is the largest animal in the world',
        answers:[
            {text:'Shark', correct: false},
            {text:'Blue Whale', correct: true},
            {text:'Elephant', correct: false},
            {text:'Giraffe', correct: false},
        ]
    },
    {
        question: 'which is the smallest country in the world',
        answers:[
            {text:'Vatican', correct: true},
            {text:'Bhutan', correct: false},
            {text:'Nepal', correct: false},
            {text:'Shri Lanka', correct: false},
        ]
    },
    {
        question: 'which is the largest desert in the world',
        answers:[
            {text:'Kalahari', correct: false},
            {text:'Gobi', correct: false},
            {text:'Sahara', correct: false},
            {text:'Antartica', correct: true},
        ]
    }
]

const questionEle = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQi = 0
let score = 0

function startQuiz(){
    currentQi = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){

    resetState()

    let currentQ = questions[currentQi]
    let questionNo = currentQi + 1
    questionEle.innerHTML = questionNo + ". " + currentQ.question

    currentQ.answers.forEach( answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.append(button)
        if(answer.correct) button.dataset.correct  = answer.correct
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const isCorrect = selectedButton.dataset.correct === "true"
    if(isCorrect) {
        selectedButton.classList.add("correct")
        score++
    }
    else selectedButton.classList.add("incorrect")
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") button.classList.add("correct")
        button.disabled  = true
    })
    nextButton.style.display = 'block'
}

function showScore() {
    resetState()
    questionEle.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQi++
    if(currentQi < questions.length) showQuestion()
    else showScore()
}

nextButton.addEventListener('click',() => {
    if(currentQi < questions.length) handleNextButton()
    else startQuiz()
})


startQuiz()