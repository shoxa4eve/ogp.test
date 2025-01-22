const questions = {
    8: [
        { 
            question: "Кто является главой государства в Республике Узбекистан?", 
            answers: ["Президент", "Премьер-министр", "Сенат", "Конституционный суд"], 
            correct: 0 
        },
        { 
            question: "Когда была принята Конституция Республики Узбекистан?", 
            answers: ["1990", "1991", "1992", "1993"], 
            correct: 2 
        }
    ],
    9: [],
    10: [],
    11: []
};

let currentClass = null;
let currentQuestionIndex = 0;

function startTest(grade) {
    currentClass = grade;
    currentQuestionIndex = 0;
    document.getElementById('tests').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentClass][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selected) {
    const questionData = questions[currentClass][currentQuestionIndex];
    if (selected === questionData.correct) {
        alert('Правильно!');
    } else {
        alert('Неправильно. Попробуй снова.');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentClass].length) {
        showQuestion();
    } else {
        alert('Тест завершен!');
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('tests').style.display = 'block';
    }
}
