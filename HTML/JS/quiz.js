class Quiz {
    constructor(question,a,b,c,correct){
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.correct = correct;
    }
}

const quizData = [
    new Quiz("Question 1 : Quel film est considéré comme le premier film d'horreur ?", "Scream", "Le manoir du diable","L'exorciste","a"),
    new Quiz("Question 2 : Comment s'appelle le tueur masqué dans Scream ?", "Ghostface", "Fantômas ","Winnie l'ourson","a"),
    new Quiz("Question 3 : Quel film codifie le sous genre avec des animaux ?", "Les Oiseaux", "Les dents de la mer","Le corbeau","b"),
    new Quiz("Question 4 : Ou se déroule le Film The Shinning ?", "Dans une prison", "Dans une église avec soeur thérèse","Dans un Hotel","b"),
    new Quiz("Question 5 : Pour quel film Kathy Bates a t'elle remporté l'oscar de la meilleur actrice ?", "Carrie", "Shinning","Misery","c"),
    new Quiz("Question 6 : Dans quel film ne voit on pas de zombies ?", "Le dernier train pour Busan", "28 jours plus tard","Get out","c"),
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let responsesGived = [];

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        responsesGived.push(answer);
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            console.log(responsesGived);
            quiz.innerHTML = `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions !
            <button onclick="location.reload()">Reload</button>
            <button onclick="reponse()">Voir les réponses</button>
            `
        }
    }
})

const dejaVu = () => {
    quiz.innerHTML = `<img src="Image/tete_de_con.png"> <br> <h1>Tu avais déjà les réponses imbéciles !</h1>`
}

const reponse = () => {
    document.body.style.overflowY = "scroll";
    const footer = document.getElementsByTagName("footer")
    footer[0].style.position = "static";
    let articles = "";
    for (let i=0;i<quizData.length;i++) {
        articles += `
       <article>
            <h2 id="question">${quizData[i].question}</h2>
          <ul>
            <li>
              <p class="${quizData[i].correct === 'a' && responsesGived[i] === 'a' ? 'wright' : quizData[i].correct === 'a' && responsesGived[i] !== 'a' ? 'wrong' : ''}" for="a" id="a_text">${quizData[i].a}</p>
            </li>
            <li>
              <p class="${quizData[i].correct === 'b' && responsesGived[i] === 'b' ? 'wright' : quizData[i].correct === 'b' && responsesGived[i] !== 'b' ? 'wrong' : ''}" for="b" id="b_text">${quizData[i].b}</p>
            </li>
            <li>
              <p class="${quizData[i].correct === 'c' && responsesGived[i] === 'c' ? 'wright' : quizData[i].correct === 'c' && responsesGived[i] !== 'c' ? 'wrong' : ''}" for="c" id="c_text">${quizData[i].c}</p>
            </li>
          </ul>
        </article>
        `
    }
    boutons = `<button onclick="document.location.assign('Quizz.html')">Reload</button>
            <button onclick="dejaVu()">Voir les réponses</button>`
    quiz.innerHTML = articles + boutons;
}