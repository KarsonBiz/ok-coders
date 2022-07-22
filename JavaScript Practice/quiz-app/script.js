const quizData = [
    {
        question: 'How old is Bison Technologies?',
        a: '4',
        b: '5',
        c: '6',
        d: '7',
        correct: 'c'
    }, {
        question: 'What programming language does Bison Technologies primarily use?',
        a: 'Java',
        b: 'JavaScript',
        c: 'C++',
        d: 'Python',
        correct: 'b'
    }, {
        question: 'How many employees does Bison Technologies have?',
        a: '1-50',
        b: '51-150',
        c: '151-300',
        d: '500-1000',
        correct: 'b'
    }, {
        question: 'Where is Bison Technologies located?',
        a: 'Palo Alto, CA',
        b: 'Austin, TX',
        c: 'Oklahoma City, OK',
        d: 'Huntsville, AL',
        correct: 'c'
    }, {
        question: 'Should you join the Bison Technologies team?',
        a: 'YES',
        b: 'no',
        c: 'maybe',
        d: 'so',
        correct: 'a'
    }
]

const quiz = document.getElementById('.quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answersEl = document.querySelectorAll('.answer');

    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //Check the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2> <button onclick="location.reload()">Try Again</button>`;
        }
    }
});