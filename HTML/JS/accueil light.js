function timer() {

  setTimeout(function() {
      document.location.assign("accueil.html");
  }, 5000);
}

const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');




const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['😈', '🎃', '👻', '🦇', '🕷️', '🧟‍♀️','🧛‍♂️'],

    })
    .then(() => jsConfetti.addConfetti())
    
    setTimeout(function() {
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff5733', '#060100', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
        confettiNumber: 2500,
      })
  }, 3000);
    
})
