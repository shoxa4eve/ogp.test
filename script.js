const questions = {
    8: [
        { 
            question: "Какой документ является основным законом Республики Узбекистан?", 
            answers: ["Конституция", "Уголовный кодекс", "Гражданский кодекс", "Закон о правах человека"], 
            correct: 0 
        },
        { 
            question: "Когда была принята Конституция Республики Узбекистан?", 
            answers: ["1990", "1991", "1992", "1993"], 
            correct: 2 
        },
        { 
            question: "Кто является главой государства в Узбекистане?", 
            answers: ["Президент", "Премьер-министр", "Спикер Сената", "Глава Конституционного суда"], 
            correct: 0 
        },
        { 
            question: "Сколько статей содержится в Конституции Республики Узбекистан?", 
            answers: ["100", "128", "132", "150"], 
            correct: 1 
        },
        { 
            question: "Какой принцип закреплён в статье 15 Конституции Республики Узбекистан?", 
            answers: ["Верховенство закона", "Свобода слова", "Разделение властей", "Народовластие"], 
            correct: 0 
        },
        // Добавьте ещё вопросы (по необходимости)
    ],
    9: [
        // Временно пусто, будет заполнено позже
    ],
    10: [
        // Временно пусто, будет заполнено позже
    ],
    11: [
        // Временно пусто, будет заполнено позже
    ]
};

// Логика теста
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
        alert('Тест завершён!');
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('tests').style.display = 'block';
    }
}
