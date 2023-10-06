// JS curseur souris

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  // "#ffb56b",
  // "#fdaf69",
  // "#f89d63",
  // "#f59761",
  // "#ef865e",
  // "#ec805d",
  // "#e36e5c",
  // "#df685c",
  // "#d5585c",
  // "#d1525c",
  // "#c5415d",
  // "#c03b5d",
  // "#b22c5e",
  // "#ac265e",
  // "#9c155f",
  // "#950f5f",
  // "#830060",
  // "#7c0060",
  // "#680060",
  // "#60005f",
  // "#48005f",
  // "#3d005e"
  
  "#e84393",
  "#fd79a8"
];



circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// JS fin curseur souris


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
  new Quiz("Question 1 : Quel film est considéré comme le premier film d'horreur ?", "Scream", "Le manoir du diable","L'exorciste","b"),
  new Quiz("Question 2 : Comment s'appelle le tueur masqué dans Scream ?", "Ghostface", "Fantômas ","Winnie l'ourson","a"),
  new Quiz("Question 3 : Quel film codifie le sous genre avec des animaux ?", "Les Oiseaux", "Les dents de la mer","Le corbeau","a"),
  new Quiz("Question 4 : Ou se déroule le Film The Shinning ?", "Dans une prison", "Dans une église avec soeur thérèse","Dans un Hotel","c"),
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
  const main = document.getElementsByTagName("main");
  main[0].removeAttribute("height");
  main[0].style.marginBottom = "0px";
  quiz.innerHTML = `<img src="Image/tete_de_con.png" height="500"> <h1 id="imb">Tu avais déjà les réponses, imbécile !</h1>`
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