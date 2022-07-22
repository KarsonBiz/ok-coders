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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: Show results
        alert('Congrats, you finished the quiz! Time for a beer!')
    }

    loadQuiz();
});