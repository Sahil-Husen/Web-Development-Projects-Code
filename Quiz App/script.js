const questions = [
    {
        'Question':'Which of the following is a markup language?',
        'a':'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'Question':'What year the JS is launched?',
        'a':'1996',
        'b': '1997',
        'c': '1995',
        'd': 'none of the above',
        'correct': 'c'
    },
    {
        'Question':'What does the CSS stands for?',
        'a':'Hyper text markup language',
        'b': 'Cascading style sheets',
        'c': 'JS object notation',
        'd': 'Helicopter',
        'correct': 'b'
    },
    {
        'Question':'What does CSS do?',
        'a':'Styling HTML',
        'b': 'Adding functionality to HTML',
        'c': 'Server side scripting',
        'd': 'none of above',
        'correct': 'a'
    },
    {
        'Question':'Out of below which is a Framework of JS?',
        'a':'Tailwind CSS',
        'b': 'Mocha JS',
        'c': 'Chai JS',
        'd': 'React JS',
        'correct': 'd'
    },
    {
        'Question':'?',
        'a':'Styling HTML',
        'b': 'Adding functionality to HTML',
        'c': 'Server side scripting',
        'd': 'none of above',
        'correct': 'a'
    },
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById('queBox');
const optionBox = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        endQuiz();
        return;
    }

    const data = questions[index];
    queBox.innerText = ` ${index + 1}) ${data.Question}`;

    optionBox[0].nextElementSibling.innerText = data.a;
    optionBox[1].nextElementSibling.innerText = data.b;
    optionBox[2].nextElementSibling.innerText = data.c;
    optionBox[3].nextElementSibling.innerText = data.d;
}

loadQuestion();

const submitQuiz = () => {
    const ans = getAnswer();
    if (!ans) {
        alert('Please select an answer before proceeding.');
        return;
    }

    const data = questions[index];
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
    resetQuiz();
}

const getAnswer = () => {
    let answer;
    optionBox.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const resetQuiz = () => {
    optionBox.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    let box = document.getElementById('box');
    box.className = 'end-quiz-box'; // Add a specific class to the container

    let message = `Your Score is ${right}/${total}`;
    if (right === total) {
        message += " Great 🎉";
    }

    box.innerHTML = `<h3>Thanks for Attending this Quiz</h3><br>${message}<br><button class="restart-btn" onclick="location.reload()">Restart Quiz</button>`;
}
